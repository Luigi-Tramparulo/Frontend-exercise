import React from 'react';
import { storiesOf } from "@storybook/react";
import scheduleFilm from "../components/film/scheduleFilm";


storiesOf("PageFilm", module)
.add("pagefilm", () => <scheduleFilm></scheduleFilm>)
