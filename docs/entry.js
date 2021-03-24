
    import React from "react";

    import ReactDOM from "react-dom";

    window.Components = {};


    import Wrapper from '../node_modules/better-docs/lib/wrapper.js';

    window.React = React;

    window.ReactDOM = ReactDOM;

    window.Wrapper = Wrapper;

  
      import _CustomWrapper from '../src/wrapper/Component.js';

      Components._CustomWrapper = _CustomWrapper;

      import Activity from '../src/Components/Activity.js';
Components.Activity = Activity;

import RenderBar from '../src/Components/GraphComponent/activity/RenderBar.js';
Components.RenderBar = RenderBar;

import RenderLegend from '../src/Components/GraphComponent/activity/RenderLegend.js';
Components.RenderLegend = RenderLegend;

import RenderTooltip from '../src/Components/GraphComponent/activity/RenderTooltip.js';
Components.RenderTooltip = RenderTooltip;

import App from '../src/App.js';
Components.App = App;

import Header from '../src/Components/Header.js';
Components.Header = Header;

import Info from '../src/Components/Info.js';
Components.Info = Info;

import Intensity from '../src/Components/Intensity.js';
Components.Intensity = Intensity;

import Menu from '../src/Components/Menu.js';
Components.Menu = Menu;

import MenuVertical from '../src/Components/MenuVertical.js';
Components.MenuVertical = MenuVertical;

import Picto from '../src/Components/Picto.js';
Components.Picto = Picto;

import Score from '../src/Components/Score.js';
Components.Score = Score;

import RenderLegendScore from '../src/Components/GraphComponent/score/RenderLegendScore.js';
Components.RenderLegendScore = RenderLegendScore;

import Spinner from '../src/Components/Spinner.js';
Components.Spinner = Spinner;

import Timing from '../src/Components/Timing.js';
Components.Timing = Timing;