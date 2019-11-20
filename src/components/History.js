import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Sidebar, { SidebarTitle } from '../components/Sidebar';
import Main from '../components/Main';
import AddMemoBtn from '../components/AddMenuBtn';
import { List, ListItem } from '../components/List';
import MemoRouter from '../components/memo';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

function History(props) {

    let history = useHistory();

    useEffect(() => {
        // Update the document title using the browser API
        window.onpopstate = function(event) {
            alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
        };
    });

    const ChangeUrl = function(title, url) {        
        if (typeof (window.history.pushState) != "undefined") {
            var obj = { Title: title, Url: url };
            window.history.pushState(obj, obj.Title, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    
        var currentState = window.history.state;
        alert(JSON.stringify(currentState));
    }

    return (
        <>
        <input type="button" value="Page1" onClick={() => ChangeUrl('Page1', 'history')} />
        <input type="button" value="Page2" onClick={() => ChangeUrl('Page2', 'history')} />
        <input type="button" value="Page3" onClick={() => ChangeUrl('Page3', 'history')} />
        </>
    );
  }

export default History;