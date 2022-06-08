import client from "@sanity/client"

export default client({
    projectId: "8wblrpd3",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-05-07"
})