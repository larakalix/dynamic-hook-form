"use client";

import * as yup from "yup";

import { Controller, ErrorOption, useForm } from "react-hook-form";
import React, { Children } from "react";

import { Field } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";

export const DynamicForm = ({ fields }: { fields: Field[] }) => {
    const yupSchema = fields.reduce((schema, field) => {
        return schema.concat(
            yup.object().shape({
                [field.name]: yup
                    .string()
                    .required(`${field.label} is required`),
            })
        );
    }, yup.object());

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(yupSchema),
    });

    const onSubmit = (data: Record<string, string>) => {
        console.log("onSubmit", data);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-4 border border-gray-400 rounded-lg h-full"
            >
                {Children.toArray(
                    fields.map(({ name, label, type, required }) => (
                        <div className="flex flex-col flex-1">
                            <label
                                htmlFor={name}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                {label}
                            </label>
                            <Controller
                                name={name as never}
                                control={control}
                                render={({ field }) => (
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        type={type}
                                        required={required ?? false}
                                        id={field.name}
                                        {...field}
                                    />
                                )}
                            />
                            {Object.entries(errors).map(([key, value]) => (
                                <p>{value.message}</p>
                            ))}
                        </div>
                    ))
                )}
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
