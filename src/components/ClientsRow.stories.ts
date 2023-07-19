import ClientsRow from "./ClientsRow"


export default {
    title: "Components/Client-Row-View",
    component: ClientsRow,
    tags: ["autodocs"]
}

export const Default = {
    args: {
        role: "string",
        user: { src: "", name: "Litmus Zhang" },
        serviceType: "Service Type",
        contractValue: 123456,
        startDate: "12-05-2022",
        endDate: "25-05-2022",
        Operatives: [{
            name: "Litmus Zhang",
            src: "https://gravatar.com/avatar/186a61344d8e45910327ab86fc98e003?s=400&d=robohash&r=x"
        }, {
            name: "Litmus Zhang",
            src: "https://gravatar.com/avatar/186a61344d8e45910327ab86fc98e003?s=400&d=robohash&r=x"
        }, {
            name: "Litmus Zhang",
            src: "https://gravatar.com/avatar/186a61344d8e45910327ab86fc98e003?s=400&d=robohash&r=x"
        }
        ]
    }
}