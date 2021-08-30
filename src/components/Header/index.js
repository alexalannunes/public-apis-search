import { Button, Heading, Input, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.headerApp} flex ai-center`}>
      <div className={styles.categoriesTitle}>
        <Heading as="h4" size="md">
          Categories
        </Heading>
      </div>

      <div className="header-form-filters flex ai-center">
        <Stack direction="row">
          <div>
            <Input style={{ width: 400 }} placeholder="Search API name or description" />
          </div>
          <div>
            <Menu>
              <MenuButton as={Button}>Auth</MenuButton>
              <MenuList>
                <MenuItem>Auth</MenuItem>
                <MenuItem>apiKey</MenuItem>
                <MenuItem>OAuth</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div>
            <Menu>
              <MenuButton as={Button}>CORS</MenuButton>
              <MenuList>
                <MenuItem>CORS</MenuItem>
                <MenuItem>Yes</MenuItem>
                <MenuItem>No</MenuItem>
                <MenuItem>Unknown</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div>
            <Menu>
              <MenuButton as={Button}>HTTPS</MenuButton>
              <MenuList>
                <MenuItem>HTTPS</MenuItem>
                <MenuItem>Yes</MenuItem>
                <MenuItem>No</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div className="header-apis-total">
            <Button disabled>423 apis</Button>
          </div>
        </Stack>
      </div>
    </header>
  );
}

export { Header };
