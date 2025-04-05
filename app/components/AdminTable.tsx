import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";
import { ContactFormDDB } from "../entities/ContactFormDDB";

export default function AdminTable({
  data,
}: {
  data: ContactFormDDB[] | undefined;
}) {
  return (
    <Table className="overflow-x-auto">
      <TableHead>
        <TableRow>
          <TableHeaderCell>#</TableHeaderCell>
          <TableHeaderCell>Full Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Question</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((data, index) => (
          <TableRow key={data.PK}>
            <TableCell className="w-[10px] border">
              <Text>{index + 1}</Text>
            </TableCell>
            <TableCell className="w-[150px] border">
              <Text>{data.fullName}</Text>
            </TableCell>
            <TableCell className="w-[150px] border">
              <Text>{data.email}</Text>
            </TableCell>
            <TableCell className="w-[120px] border">
              <Text>{data.phone}</Text>
            </TableCell>
            <TableCell className="max-w-[400px] border">
              <Text>{data.question}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
