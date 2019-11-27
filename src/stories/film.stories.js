import React from 'react';
import { storiesOf } from "@storybook/react";
import sheduleFilm from "../components/film/sheduleFilm";


storiesOf("PageFilm", module)
.add("pagefilm", () => <sheduleFilm></sheduleFilm>)
