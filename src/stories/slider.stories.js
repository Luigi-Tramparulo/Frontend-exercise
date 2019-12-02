import React from 'react';
import { storiesOf } from "@storybook/react";
import {BrowserRouter} from 'react-router-dom'
import Slider from '../components/slider';

storiesOf("Slide", module)
.add("slide",() =>(<BrowserRouter><Slider /></BrowserRouter>))
