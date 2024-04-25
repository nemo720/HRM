import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {USERS} from "@/services/dataEmployee.js";
import { useState } from "react";
import DebouncedInput from "./DebouncedInput.jsx";
import {SearchIcon} from "../Icons.jsx";

const TableEmployee = () => {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor("", {
            id: "Employee ID",
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: "Employee ID",
        }),
        columnHelper.accessor("EmployeeName", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Employee",
        }),
        columnHelper.accessor("Gender", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Gender",
        }),
        columnHelper.accessor("DaysWorking", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Days working in this month",
        }),
        columnHelper.accessor("DaysRest", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Days rest",
        }),
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-1 max-w-5xl mx-auto text-black fill-black-700">
            <div className="flex justify-between mb-2">
                <div className="w-full flex items-center gap-1">
                    <SearchIcon />
                    <DebouncedInput
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="pl-2 bg-transparent text-gray-800 outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
                        placeholder="Search all columns..."
                    />
                </div>
            </div>
            <table className="border border-gray-700 w-full text-center">
                <thead className="bg-gray-400">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className="capitalize px-3.5 py-2">
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
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
                ${i % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}
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
            <div className="flex items-center justify-end mt-5 gap-2">
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className="p-1 rounded border border-black px-2 disabled:opacity-30"
                >
                    {"<"}
                </button>
                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="p-1 rounded border border-black px-2 disabled:opacity-30"
                >
                    {">"}
                </button>

                <span className="flex items-center text-black gap-1">
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
                    className="border border-gray-300 p-2 rounded bg-transparent"
                >
                    {[5, 7].map((pageSize) => (
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
