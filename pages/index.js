import Head from "next/head";
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/react";
import Products from "./products";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <Products />;
}
