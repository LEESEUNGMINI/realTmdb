import React, { useRef } from "react";
import Layout from "../conponents/Layout";
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <h1>Test</h1>
          <Button colorScheme="blue">Button</Button>
          <Button colorScheme="red" size="lg">
            zz
          </Button>
          <Checkbox color="red"></Checkbox>
          <Spinner color="red.500" />
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <div>
            <SkeletonCircle size="10" />
            <Skeleton height="20" width="100px" />
            {/* dark Mode Chakra ui */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "다크모드 버튼" : "라이트모드 버튼"}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
