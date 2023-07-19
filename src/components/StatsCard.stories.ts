import StatsCard from "./StatsCard";


export default {
    title: "Components/StatsCard",
    component: StatsCard,
    tags: ["autodoc"],
}

export const Default = {
    args: {
        title: "Security Companies",
        current: 1934,
        total: 2013,
        rate: 12.5,
        icon: "P"
    }
}

export const Loading = {
    args: {
        loading: true
    }
}