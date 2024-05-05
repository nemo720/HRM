import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import DebouncedInput from "./DebouncedInput.jsx";
import { SearchIcon } from "../Icons.jsx";
import {useEffect, useState} from "react";
import {listEmployees} from "@/services/EmployeeService.js";

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
    columnHelper.accessor('idEmployee', {
      id: 'id',
      header: () => <span>Employee ID</span>,
      cell: info => <p>{info.getValue()}</p>,
    }),
    columnHelper.accessor('firstName', {
      cell: info => <p>{info.getValue()}</p>,
      header: () => <span>First Name</span>
    }),
    columnHelper.accessor('lastName', {
      cell: info => <p>{info.getValue()}</p>,
      header: () => <span>Last Name</span>
    }),
    columnHelper.accessor('email', {
      cell: info => <p>{info.getValue()}</p>,
      header: () => <span>Email</span>
    }),
    columnHelper.accessor('gender', {
      cell: info => <p>{info.getValue() === true ? 'Male' : 'Female'}</p>,
      header: () => <span>Gender</span>
    }),
    columnHelper.accessor('daysWorkingPerMonth', {
      cell: info => <p>{info.getValue()}</p>,
      header: () => <span>Days Working in month</span>
    }),
    columnHelper.accessor('vacationDays', {
      cell: info => <p>{info.getValue()}</p>,
      header: () => <span>Days Rest</span>
    }),
    columnHelper.accessor(' ', {
      cell: info => <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleIdNameDelete(info.getValue())}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
      >
        update
      </button>,
    }),
    columnHelper.accessor(' ', {
      cell: info => <button
          type="button"
          className="btn btn-danger bg-red-500"
          onClick={() => handleIdNameDelete(info.getValue())}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
      >
        delete
      </button>,
    })
  ]
  const [data, setData] = useState(() => []);
  useEffect(() => {
    listEmployees().then((response) => {
      console.log(response.data); // Thêm dòng này
      setData(response.data);
    }).catch((error) => {
      console.log("Fetching data failed:", error);
    })
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
        <a href="/handleEmployee" className="w-auto h-full p-1 rounded-md bg-blue-300">Create</a>
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
                                  ? 'cursor-pointer select-none flex min-w-[36px]'
                                  : '',
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
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Confirm employee deletion
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Do you want to delete this employee?
              </div>
              <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => handleDelete(idDelete)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
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
