import React from 'react';
import { storiesOf } from "@storybook/react";
import FilmCards from '../components/film';

storiesOf("FilmCards", module)
.add("filmcards",() =>(<FilmCards namefilm="joker"/>))
.add("filmcards2",() =>(<FilmCards namefilm="titanic"/>))
