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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryListAllAction } from "../../redux/actions/CategoryAction";

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  useEffect(() => {
    dispatch(categoryListAllAction());
  }, [dispatch]);
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
            <Th scope="col">Mô tả</Th>
            <Th className="text-end">Hành động</Th>
          </Tr>
        </Thead>
        {/* Table Data */}
        <Tbody>
          {categories?.map((category, index) => (
            <Tr key={index}>
              <Td>
                <Stack>
                  <Checkbox type="checkbox" value={category._id} />
                </Stack>
              </Td>
              <Td>{index}</Td>
              <Td>
                <b>{category.name}</b>
              </Td>
              <Td>{category.description}</Td>
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
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesTable;
