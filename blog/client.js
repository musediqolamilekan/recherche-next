import client from "@sanity/client"

export default client({
    projectId: "auxjw0lp",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-05-07"
})