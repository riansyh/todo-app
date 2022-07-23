import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { TasksContext } from "../App";
import { done, remove } from "./../feature/todo/todoSlice";
import { dispatch } from "../app/store";

function Task({ status, name, number }) {
    const checkHandler = (key) => {
        dispatch(done(key));
    };

    return (
        <div className={status}>
            <div className="detail" onClick={() => checkHandler(number)}>
                <label className="checkbox">
                    <span className="checkbox__input">
                        <input type="checkbox" name="checkbox" />
                        <span className="checkbox__control">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    d="M1.73 12.91l6.37 6.37L22.79 4.59"
                                />
                            </svg>
                        </span>
                    </span>
                    <span className="radio__label">{name}</span>
                </label>
            </div>
            <div className="trash" onClick={() => dispatch(remove(number))}>
                <Icon icon="heroicons-outline:trash" color="#fc7a7a" width="24" height="24" />
            </div>
        </div>
    );
}

export default Task;
