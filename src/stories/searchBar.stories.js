import React from 'react';
import { storiesOf } from "@storybook/react";
import Search from "../components/film/searchBar";
import { withKnobs } from '@storybook/addon-knobs/react';

const films = ["joker", "titanic", "Star Wars", "Avengers", "Thor", "Rocky", "The Wolverine", "X-Men"];

storiesOf("Search", module)
.add("searchbar", () => <Search elements={films}></Search>)
