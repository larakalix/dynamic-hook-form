import { DynamicForm } from "@/components/DynamicForm";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid grid-cols-3 gap-4">
                <DynamicForm
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                            required: true,
                        },
                        {
                            name: "password",
                            label: "Password",
                            type: "password",
                        },
                    ]}
                />

                <DynamicForm
                    fields={[
                        {
                            name: "color",
                            label: "Color",
                            type: "color",
                            required: true,
                        },
                        {
                            name: "size",
                            label: "Email",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                            required: true,
                        },
                    ]}
                />

                <DynamicForm
                    fields={[
                        {
                            name: "licenseNumber",
                            label: "License Number",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "type",
                            label: "Type",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                            required: true,
                        },
                    ]}
                />

                <DynamicForm
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: false,
                        },
                        {
                            name: "email",
                            label: "Email",
                            type: "email",
                        },
                        {
                            name: "age",
                            label: "Age",
                            type: "number",
                        },
                    ]}
                />

                <DynamicForm
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: false,
                        },
                        {
                            name: "week",
                            label: "Week",
                            type: "week",
                        },
                        {
                            name: "age",
                            label: "Age",
                            type: "number",
                        },
                    ]}
                />

                <DynamicForm
                    fields={[
                        {
                            name: "name",
                            label: "Name",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "week",
                            label: "Week",
                            type: "week",
                        },
                        {
                            name: "age",
                            label: "Age",
                            type: "number",
                        },
                    ]}
                />
            </div>
        </main>
    );
}
