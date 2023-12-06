type MyType = {
  department: string,
  sub_departments: Array<string>
}

export let depart: MyType[] =
  [
    {
      "department": "Customer_service",
      "sub_departments": [
        "Support",
        "Customer_success"
      ]
    },
    {
      "department": "Design",
      "sub_departments": [
        "Graphic_design",
        "Product_design",
        "Web_design"
      ]
    },
    {
      "department": "Agriculture & Fishing",
      "sub_departments": [
        "Agriculture",
        "Crops",
        "Farming",
        "Ranching",
        "Fishery"
      ]
    }
  ]

