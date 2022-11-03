import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { orderDeleteAction } from "../../redux/actions/OrderAction";
const Orders = (props) => {
  const { orders } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  // const deleteHandle = (id) => {
  //   dispatch(orderDeleteAction(id));
  // };
  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th scope="col">STT</Th>
          <Th scope="col">Tên</Th>
          <Th scope="col">Email</Th>
          <Th scope="col">Tổng tiền</Th>
          <Th scope="col">Tình trạng</Th>
          <Th scope="col">Ngày tạo</Th>
          <Th>Vận chuyển</Th>
          <Th scope="col" className="text-end">
            Hành động
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map((order, index) => (
          <Tr key={order._id}>
            <Td>{index}</Td>
            <Td>
              <b>{order.user?.name}</b>
            </Td>
            <Td>{order.user?.email}</Td>
            <Td>{order.totalPrice}</Td>
            <Td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Đã thanh toán {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  Chưa thanh toán
                </span>
              )}
            </Td>

            <Td>{moment(order.createAt).format("MMM Do YY")}</Td>
            <Td>
              {order.isDelivered ? (
                <span className="badge btn-success">Đã giao hàng</span>
              ) : (
                <span className="badge btn-danger">Chưa giao hàng</span>
              )}
            </Td>
            <Td className="d-flex justify-content-end align-item-center">
              <Menu>
                <MenuButton>
                  <i class="far fa-ellipsis-h"></i>
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <Link to={`/order/${order._id}`}>
                    <MenuItem>
                      <i className="fas fa-eye mx-1"></i>Xem đơn hàng
                    </MenuItem>
                  </Link>
                  <Box>
                    <MenuItem onClick={onOpen}>
                      <i class="fas fa-trash-alt mx-1"></i>
                      {""}Xoá
                    </MenuItem>
                  </Box>
                </MenuList>
              </Menu>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xoá đơn hàng
            </AlertDialogHeader>

            <AlertDialogBody>
              Bạn có chắc xoá đơn hàng, không thể hoãn lại được. !
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Huỷ bỏ
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Xoá luôn
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Table>
  );
};

export default Orders;
