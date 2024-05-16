import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Badge } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    SortingState,
    getSortedRowModel,
    createColumnHelper
} from "@tanstack/react-table";
import { IUser } from '@/types/users';

type IProps = {
    data: IUser[]
}

const UserTable = ({ data }: IProps) => {

    const [sorting, setSorting] = React.useState<SortingState>([]);


    const columnHelper = createColumnHelper<IUser>();

    const columns = [
        columnHelper.accessor("name", {
            cell: (info) => info.getValue(),
            header: "Name"
        }),
        columnHelper.accessor("email", {
            cell: (info) => info.getValue(),
            header: "Email Address"
        }),
        columnHelper.accessor("gender", {
            cell: (info) => info.getValue(),
            header: "Gender",
        }),
        columnHelper.accessor("status", {
            cell: ({ row: { original } }) => (
                <Badge
                    size={"xs"}
                    colorScheme={original.status == "active" ? "green" : "gray"}
                >
                    {original.status}
                </Badge>
            ),
            header: "Status",
        })
    ];

const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
        sorting
    }
});


return (
    <Table>
        <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <Th
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}

                                <chakra.span pl="4">
                                    {header.column.getIsSorted() ? (
                                        header.column.getIsSorted() === "desc" ? (
                                            <TriangleDownIcon aria-label="sorted descending" />
                                        ) : (
                                            <TriangleUpIcon aria-label="sorted ascending" />
                                        )
                                    ) : null}
                                </chakra.span>
                            </Th>
                        );
                    })}
                </Tr>
            ))}
        </Thead>
        <Tbody>
            {table.getRowModel().rows.map((row) => (
                <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                        return (
                            <Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        );
                    })}
                </Tr>
            ))}
        </Tbody>
    </Table>
)
}

export default UserTable;