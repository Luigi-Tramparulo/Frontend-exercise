import React from 'react';
import { storiesOf } from "@storybook/react";
import PageFilm from "../components/film/pageFilm";
import { withKnobs } from '@storybook/addon-knobs/react';


storiesOf("PageFilm", module)
.add("pagefilm", () => <PageFilm></PageFilm>)
