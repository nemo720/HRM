import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel,
} from "@tanstack/react-table";
import {USERS} from "@/services/dataEmployee.js";
import { useState } from "react";
import DebouncedInput from "@/component/NavEmployee/DebouncedInput.jsx";
import {SearchIcon} from "@/component/Icons.jsx";

const TableTotalEarnings = () => {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('Employee ID', {
            cell: info => <span>{info.row.index + 1}</span>,
        }),
        columnHelper.accessor("EmployeeName", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Employee",
        }),
        columnHelper.accessor("Earnings", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: "Earnings",
        })
    ];
    const [data] = useState(() => [...USERS]);
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
        <div className="p-1 max-w-5xl mx-auto text-white fill-gray-700">
            <div className="flex justify-between mb-2">
                <div className="w-full flex items-center gap-1">
                    <SearchIcon />
                    <DebouncedInput
                        value={globalFilter ?? ""}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="pl-2 bg-neutral-300 text-gray-800 outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
                        placeholder="Search all columns..."
                    />
                </div>
            </div>
            <table className="border border-gray-700 w-full text-left">
                <thead className="bg-neutral-600">
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
                                        }[header.column.getIsSorted() ] ?? null}
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
                ${i % 2 === 0 ? "bg-gray-500" : "bg-gray-400"}
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
                    className="p-1 border border-gray-300 px-2 disabled:opacity-30"
                >
                    {"<"}
                </button>
                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className="p-1 border border-gray-300 px-2 disabled:opacity-30"
                >
                    {">"}
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
                    className="p-2 bg-gray-400"
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

export default TableTotalEarnings;
