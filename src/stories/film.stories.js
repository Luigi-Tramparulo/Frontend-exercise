import React from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs/react';
import FilmCards from '../components/film';


storiesOf("FilmCards", module)
.addDecorator(withKnobs)
.add("filmcards",() =>(<FilmCards namefilm="joker"/>))
.add("filmcards2",() =>(<FilmCards namefilm="titanic"/>))
