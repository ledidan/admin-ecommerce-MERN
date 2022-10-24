import {
  Checkbox,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CategoriesTable = () => {
  return (
    <TableContainer className="col-md-12 col-lg-8">
      <Table className="table">
        <Thead>
          <Tr>
            <Th>
              <Stack>
                <Checkbox type="checkbox" value="" />
              </Stack>
            </Th>
            <Th>ID</Th>
            <Th>Tên danh mục</Th>
            <Th>Mô tả</Th>
            <Th className="text-end">Hành động</Th>
          </Tr>
        </Thead>
        {/* Table Data */}
        <Tbody>
          <Tr>
            <Td>
              <Stack>
                <Checkbox type="checkbox" value="" />
              </Stack>
            </Td>
            <Td>1</Td>
            <Td>
              <b>Men clothes</b>
            </Td>
            <Td>Men clothes</Td>
            <Td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Sửa thông tin
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Xoá
                  </Link>
                </div>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Stack>
                <Checkbox type="checkbox" value="" />
              </Stack>
            </Td>
            <Td>2</Td>
            <Td>
              <b>Women fashion</b>
            </Td>
            <Td>Fashions for Women</Td>

            <Td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Stack>
                <Checkbox type="checkbox" value="" />
              </Stack>
            </Td>
            <Td>3</Td>
            <Td>
              <b>Kids clothes</b>
            </Td>
            <Td>Clothes for kids</Td>

            <Td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Edit info
                  </Link>
                  <Link className="dropdown-item text-danger" to="#">
                    Delete
                  </Link>
                </div>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesTable;
