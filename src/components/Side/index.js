import { ListItem, OrderedList } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function Side() {
  return (
    <div className={styles.side}>
      <OrderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
    </div>
  );
}

export { Side };
