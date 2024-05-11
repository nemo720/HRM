import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import DebouncedInput from "./DebouncedInput.jsx";
import { SearchIcon } from "../Icons.jsx";
import { useEffect, useState } from "react";
import { listEmployees } from "@/services/EmployeeService.js";
import { Trash, FilePenLine } from "lucide-react";
const TableEmployee = () => {
  const [idDelete, setIdDelete] = useState(0);
  const [nameDelete, setNameDelete] = useState("");

  const columnHelper = createColumnHelper();
  const handleIdNameDelete = (item) => {
    setIdDelete(item.id);
    setNameDelete(item.firstName);
  };

  const handleDelete = async (id) => {
    // try {
    //   await axios.delete("http://localhost:8080/api/employee/" + id);
    //   toast("xóa thành công", {
    //     position: "top-center",
    //     autoClose: 2000,
    //   });
    //   findAll();
    // } catch (e) {
    //   console.log(e);
    // }
  };
  const columns = [
    columnHelper.accessor("idEmployee", {
      id: "id",
      header: () => <span>Employee Number</span>,
      cell: (info) => <p>{info.getValue()}</p>,
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("email", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor("gender", {
      cell: (info) => <p>{info.getValue() === true ? "Male" : "Female"}</p>,
      header: () => <span>Gender</span>,
    }),
    columnHelper.accessor("daysWorkingPerMonth", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Days Working in month</span>,
    }),
    columnHelper.accessor("vacationDays", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Days Rest</span>,
    }),
    columnHelper.accessor(" ", {
      cell: (info) => (
        <Link to={`/update/${info.row.original.idEmployee}`}>
          <FilePenLine className=" text-blue-500  hover:scale-125" />
        </Link>
      ),
    }),
    columnHelper.accessor(" ", {
      cell: (info) => (
        <a className="w-full h-auto   " href="/">
          <Trash className="text-red-500 hover:scale-125 " />
        </a>
      ),
    }),
  ];
  const [data, setData] = useState(() => []);
  useEffect(() => {
    listEmployees()
      .then((response) => {
        // Lọc ra những người không phải là nhân viên
        const filteredData = response.data.filter(
          (employee) => employee.idEmployee !== 0
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.log("Fetching data failed:", error);
      });
  }, []);

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSort = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="p-1 max-w-6xl mx-auto text-black ">
      <div className="flex justify-between mb-2 flex-row-reverse">
        <div className="w-full flex items-center gap-1 justify-end">
          <SearchIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="pl-2 bg-neutral-300 text-gray-800 outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-300 rounded-md"
            placeholder="Search ..."
          />
        </div>
        <div className="w-auto h-full flex gap-6 "> 
        <a
          href="/handleEmployee"
          className="w-auto h-full  rounded-md bg-blue-300 px-2 py-2 hover:transition hover:scale-110 hover:bg-slate-200 hover:border-blue-200 hover:border active:bg-red-200 duration-150"
        >
          Create
        </a>
          <select
            id="sort-gender"
            name="sortGender" // Add the name attribute to match the state key
            value={selectedValue} // Set the selected value based on formData
            onChange={handleSort}
            className=" w-auto  rounded-md  px-3 py-2 border "
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
         
        </div>

      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-neutral-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex min-w-[36px]"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <span className="pl-2">↑</span>,
                        desc: <span className="pl-2">↓</span>,
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                ${i % 2 === 0 ? "bg-white" : "bg-gray-200"}
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 rounded border border-gray-900 px-2 disabled:opacity-30"
        >
          {"< Previous"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 rounded border border-gray-900 px-2 disabled:opacity-30"
        >
          {"Next >"}
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-gray-200"
        >
          {[3, 5, 7].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableEmployee;
