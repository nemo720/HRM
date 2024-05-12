import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { listEmployees } from "@/services/EmployeeService.js";
import { useEffect, useState } from "react";
import DebouncedInput from "@/component/NavEmployee/DebouncedInput.jsx";
import { SearchIcon } from "@/component/Icons.jsx";

const TablePayroll = () => {
  const columnHelper = createColumnHelper();

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
    columnHelper.accessor("ethnicity", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Ethnicity</span>,
    }),
    columnHelper.accessor("employmentStatus", {
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <span>Employment Status</span>,
    }),
    columnHelper.accessor("benefitPlans.deductable", {
      cell: (info) => <p>${info.getValue()}</p>,
      header: () => <span>Benefits</span>,
    }),
    columnHelper.accessor("payRates.payAmount", {
      cell: (info) => <p>${info.getValue()}</p>,
      header: () => <span>Earnings</span>,
    }),
    columnHelper.accessor("benefitPlans.deductable", {
      cell: (info) => <p>${info.getValue() + info.row.original.payRates.payAmount}</p>,
      header: () => <span>Total</span>,
    }),
  ];
  const [data, setData] = useState(() => []);
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
  const [selectedEmpStatus, setSelectedEmpStatus] = useState(null);
  const [selectedEthnicity, setSelectedEthnicity] = useState(null);
  const handleSortEmpStatus = (e) => {
    const value = e.target.value;
    setSelectedEmpStatus(value);
    if (value === 'fullTime') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.employmentStatus === 'Fulltime  ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    } else if (value === 'partTime') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.employmentStatus === 'Parttime  ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  const handleSortEthnicity = (e) => {
    const value = e.target.value;
    setSelectedEthnicity(value);
    if (value === 'British') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.ethnicity === 'British   ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    } else if (value === 'Canadian') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.ethnicity === 'Canadian  ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    }
    else if (value === 'Latino') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.ethnicity === 'Latino    ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    }
    else if (value === 'American') {
      listEmployees().then((response) => {
        const filteredData = response.data.filter(employee => employee.ethnicity === 'American  ');
        setData(filteredData);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  useEffect(() => {
    listEmployees()
        .then((response) => {
          let filteredData = response.data.filter(
              (employee) => employee.idEmployee !== 0
          );
          if (selectedEmpStatus) {
            filteredData = filteredData.filter((employee) =>
                selectedEmpStatus === 'fullTime'
                    ? employee.employmentStatus === 'Fulltime  '
                    : selectedEmpStatus === 'partTime'
                        ? employee.employmentStatus === 'Parttime  '
                        : true // keep the employee if no match
            );
          }

          if (selectedEthnicity) {
            filteredData = filteredData.filter((employee) =>
                selectedEthnicity === 'British'
                    ? employee.ethnicity === 'British   '
                    : selectedEthnicity === 'Canadian'
                        ? employee.ethnicity === 'Canadian  '
                        : selectedEthnicity === 'Latino'
                            ? employee.ethnicity === 'Latino    '
                            : employee.ethnicity === 'American  '
            );
          }
          setData(filteredData);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [selectedEmpStatus, selectedEthnicity]);
  return (
    <div className="p-1 max-w-6xl mx-auto text-black">
      <div className="flex justify-between mb-2 flex-row-reverse ">
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
          <select
            id="sort-time"
            name="sortTime" // Add the name attribute to match the state key
            value={selectedEmpStatus} // Set the selected value based on formData
            onChange={handleSortEmpStatus}
            className=" w-auto  rounded-md  px-3 py-2 border "
        
          >
          <option value="" disabled selected>Sort by Emp Status</option>
            <option  value="fullTime">Sort by full time</option>
            <option value="partTime">Sort by part time</option>
          </select>
          <select
            id="sort-ethnicity"
            name="sortEthnicity" // Add the name attribute to match the state key
            value={selectedEthnicity} // Set the selected value based on formData
            onChange={handleSortEthnicity}
            className=" w-auto  rounded-md  px-3 py-2 border "
          >
          <option value="" disabled selected>Sort by Ethnicity</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Latino">Latino</option>
            <option value="American">American</option>
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

export default TablePayroll;
