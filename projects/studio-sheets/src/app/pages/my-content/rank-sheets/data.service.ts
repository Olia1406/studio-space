import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nestedData = {
    "asOfDate": "20201231",
    "performanceData": [
      {
        "id": "1",
        "name": "TOTAL",
        "calculationType": "CTR",
        "methodology": "geometricCompounding",
        "benchmarks": [
          {
            "startDate": "20201201",
            "endDate": "20201231",
            "id": "BSLN0003",
            "name": "Global Equity Fund"
          }
        ],
        "drillable": true,
        "securities": false,
        "periods": [
          {
            "type": "Custom",
            "startDate": "20201201",
            "endDate": "20201231",
            "returnType": "Gross",
            "fundReturn": 0.035380,
            "benchmarkReturn": 0.056226,
            "valueAdd": -0.020846,
            "fundWeight": 100.0000,
            "benchmarkWeight": 100.0000,
            "fundCTR": 0.035380,
            "benchmarkCTR": 0.056226,
            "relativeCTR": -0.020846,
            "statusCode": 0,
            "message": "OK"
          }
        ],
        "group": [
          {
            "id": "65",
            "name": "Financials",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.075157,
                "benchmarkReturn": 0.042225,
                "valueAdd": 0.032932,
                "fundWeight": 13.2079,
                "benchmarkWeight": 9.5171,
                "fundCTR": 0.009927,
                "benchmarkCTR": 0.004019,
                "relativeCTR": 0.005908,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "69",
                "name": "Diversified Financials",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.070957,
                    "benchmarkReturn": 0.045254,
                    "valueAdd": 0.025703,
                    "fundWeight": 4.2183,
                    "benchmarkWeight": 4.1687,
                    "fundCTR": 0.002993,
                    "benchmarkCTR": 0.001887,
                    "relativeCTR": 0.001107,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "70",
                    "name": "Capital Markets",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.073442,
                        "benchmarkReturn": 0.059664,
                        "valueAdd": 0.013778,
                        "fundWeight": 3.6945,
                        "benchmarkWeight": 2.8145,
                        "fundCTR": 0.002713,
                        "benchmarkCTR": 0.001679,
                        "relativeCTR": 0.001034,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "496",
                        "name": "40203040",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.040611,
                            "benchmarkReturn": 0.028205,
                            "valueAdd": 0.012406,
                            "fundWeight": 1.1539,
                            "benchmarkWeight": 0.9725,
                            "fundCTR": 0.000469,
                            "benchmarkCTR": 0.000274,
                            "relativeCTR": 0.000194,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "71",
                        "name": "Diversified Capital Markets",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.015961,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0785,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000013,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "192",
                        "name": "Investment Banking & Brokerage",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.128777,
                            "benchmarkReturn": 0.115071,
                            "valueAdd": 0.013706,
                            "fundWeight": 1.2252,
                            "benchmarkWeight": 0.0903,
                            "fundCTR": 0.001578,
                            "benchmarkCTR": 0.000104,
                            "relativeCTR": 0.001474,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "178",
                        "name": "Asset Management & Custody Banks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.052692,
                            "benchmarkReturn": 0.077385,
                            "valueAdd": -0.024693,
                            "fundWeight": 1.3154,
                            "benchmarkWeight": 1.6732,
                            "fundCTR": 0.000693,
                            "benchmarkCTR": 0.001295,
                            "relativeCTR": -0.000602,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "497",
                    "name": "Mortgage Real Estate Investment",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.028631,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0027,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000001,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "498",
                        "name": "40204010",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.028631,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0027,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000001,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "155",
                    "name": "Diversified Financial Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.013701,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 1.2357,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000169,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "156",
                        "name": "Multi-Sector Holdings",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.013667,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 1.2334,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000169,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "247",
                        "name": "Other Diversified Financial Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.032051,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0022,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000001,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "206",
                        "name": "Specialized Finance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.045272,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0001,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "146",
                    "name": "Consumer Finance",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.053304,
                        "benchmarkReturn": 0.046625,
                        "valueAdd": 0.006678,
                        "fundWeight": 0.5238,
                        "benchmarkWeight": 0.1158,
                        "fundCTR": 0.000279,
                        "benchmarkCTR": 0.000054,
                        "relativeCTR": 0.000225,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "147",
                        "name": "Consumer Finance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.053304,
                            "benchmarkReturn": 0.046625,
                            "valueAdd": 0.006678,
                            "fundWeight": 0.5238,
                            "benchmarkWeight": 0.1158,
                            "fundCTR": 0.000279,
                            "benchmarkCTR": 0.000054,
                            "relativeCTR": 0.000225,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "66",
                "name": "Banks",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.087838,
                    "benchmarkReturn": 0.059364,
                    "valueAdd": 0.028474,
                    "fundWeight": 6.3089,
                    "benchmarkWeight": 1.3206,
                    "fundCTR": 0.005542,
                    "benchmarkCTR": 0.000784,
                    "relativeCTR": 0.004758,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "67",
                    "name": "Banks",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.087438,
                        "benchmarkReturn": 0.059364,
                        "valueAdd": 0.028074,
                        "fundWeight": 6.2710,
                        "benchmarkWeight": 1.3206,
                        "fundCTR": 0.005483,
                        "benchmarkCTR": 0.000784,
                        "relativeCTR": 0.004699,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "187",
                        "name": "Regional Banks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.089315,
                            "benchmarkReturn": 0.114925,
                            "valueAdd": -0.025609,
                            "fundWeight": 1.6315,
                            "benchmarkWeight": 0.1205,
                            "fundCTR": 0.001457,
                            "benchmarkCTR": 0.000139,
                            "relativeCTR": 0.001319,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "68",
                        "name": "Diversified Banks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.086783,
                            "benchmarkReturn": 0.053925,
                            "valueAdd": 0.032858,
                            "fundWeight": 4.6395,
                            "benchmarkWeight": 1.2000,
                            "fundCTR": 0.004026,
                            "benchmarkCTR": 0.000647,
                            "relativeCTR": 0.003379,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "171",
                    "name": "Thrifts & Mortgage Finance",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.157333,
                        "benchmarkReturn": null,
                        "valueAdd": null,
                        "fundWeight": 0.0379,
                        "benchmarkWeight": null,
                        "fundCTR": 0.000060,
                        "benchmarkCTR": null,
                        "relativeCTR": null,
                        "statusCode": 2730,
                        "message": "No benchmark return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "172",
                        "name": "Thrifts & Mortgage Finance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.157333,
                            "benchmarkReturn": null,
                            "valueAdd": null,
                            "fundWeight": 0.0379,
                            "benchmarkWeight": null,
                            "fundCTR": 0.000060,
                            "benchmarkCTR": null,
                            "relativeCTR": null,
                            "statusCode": 2730,
                            "message": "No benchmark return data"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "72",
                "name": "Insurance",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.052255,
                    "benchmarkReturn": 0.033581,
                    "valueAdd": 0.018674,
                    "fundWeight": 2.6806,
                    "benchmarkWeight": 4.0278,
                    "fundCTR": 0.001401,
                    "benchmarkCTR": 0.001353,
                    "relativeCTR": 0.000048,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "73",
                    "name": "Insurance",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.052255,
                        "benchmarkReturn": 0.033581,
                        "valueAdd": 0.018674,
                        "fundWeight": 2.6806,
                        "benchmarkWeight": 4.0278,
                        "fundCTR": 0.001401,
                        "benchmarkCTR": 0.001353,
                        "relativeCTR": 0.000048,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "173",
                        "name": "Reinsurance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.016396,
                            "benchmarkReturn": 0.038806,
                            "valueAdd": -0.022411,
                            "fundWeight": 0.1394,
                            "benchmarkWeight": 0.6392,
                            "fundCTR": 0.000023,
                            "benchmarkCTR": 0.000248,
                            "relativeCTR": -0.000225,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "148",
                        "name": "Property & Casualty Insurance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.079108,
                            "benchmarkReturn": 0.067301,
                            "valueAdd": 0.011807,
                            "fundWeight": 1.2615,
                            "benchmarkWeight": 0.5664,
                            "fundCTR": 0.000998,
                            "benchmarkCTR": 0.000381,
                            "relativeCTR": 0.000617,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "75",
                        "name": "Life & Health Insurance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.019900,
                            "benchmarkReturn": 0.071975,
                            "valueAdd": -0.052075,
                            "fundWeight": 0.7304,
                            "benchmarkWeight": 0.2388,
                            "fundCTR": 0.000145,
                            "benchmarkCTR": 0.000172,
                            "relativeCTR": -0.000027,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "74",
                        "name": "Insurance Brokers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.033591,
                            "benchmarkReturn": 0.030001,
                            "valueAdd": 0.003590,
                            "fundWeight": 0.4060,
                            "benchmarkWeight": 0.0263,
                            "fundCTR": 0.000136,
                            "benchmarkCTR": 0.000008,
                            "relativeCTR": 0.000128,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "210",
                        "name": "Multi-line Insurance",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.076593,
                            "benchmarkReturn": 0.021596,
                            "valueAdd": 0.054997,
                            "fundWeight": 0.1433,
                            "benchmarkWeight": 2.5570,
                            "fundCTR": 0.000110,
                            "benchmarkCTR": 0.000552,
                            "relativeCTR": -0.000442,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "44",
            "name": "Consumer Staples",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.010467,
                "benchmarkReturn": 0.091698,
                "valueAdd": -0.081231,
                "fundWeight": 10.3009,
                "benchmarkWeight": 12.9097,
                "fundCTR": 0.001078,
                "benchmarkCTR": 0.011838,
                "relativeCTR": -0.010760,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "141",
                "name": "Food & Staples Retailing",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.022620,
                    "benchmarkReturn": -0.000705,
                    "valueAdd": -0.021915,
                    "fundWeight": 2.9116,
                    "benchmarkWeight": 0.4168,
                    "fundCTR": -0.000659,
                    "benchmarkCTR": -0.000003,
                    "relativeCTR": -0.000656,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "142",
                    "name": "Food & Staples Retailing",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.022620,
                        "benchmarkReturn": -0.000705,
                        "valueAdd": -0.021915,
                        "fundWeight": 2.9116,
                        "benchmarkWeight": 0.4168,
                        "fundCTR": -0.000659,
                        "benchmarkCTR": -0.000003,
                        "relativeCTR": -0.000656,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "244",
                        "name": "Food Distributors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.041661,
                            "benchmarkReturn": 0.041661,
                            "valueAdd": 0.000000,
                            "fundWeight": 0.1478,
                            "benchmarkWeight": 0.0102,
                            "fundCTR": 0.000062,
                            "benchmarkCTR": 0.000004,
                            "relativeCTR": 0.000057,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "144",
                        "name": "Hypermarkets & Super Centers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.045600,
                            "benchmarkReturn": -0.003825,
                            "valueAdd": -0.041775,
                            "fundWeight": 1.9797,
                            "benchmarkWeight": 0.3377,
                            "fundCTR": -0.000903,
                            "benchmarkCTR": -0.000013,
                            "relativeCTR": -0.000890,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "143",
                        "name": "Food Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.026093,
                            "benchmarkReturn": 0.006656,
                            "valueAdd": -0.032749,
                            "fundWeight": 0.2005,
                            "benchmarkWeight": 0.0632,
                            "fundCTR": -0.000052,
                            "benchmarkCTR": 0.000004,
                            "relativeCTR": -0.000057,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "204",
                        "name": "Drug Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.048117,
                            "benchmarkReturn": 0.048117,
                            "valueAdd": 0.000000,
                            "fundWeight": 0.5836,
                            "benchmarkWeight": 0.0057,
                            "fundCTR": 0.000281,
                            "benchmarkCTR": 0.000003,
                            "relativeCTR": 0.000278,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "51",
                "name": "Household & Personal Products",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.000399,
                    "benchmarkReturn": 0.033879,
                    "valueAdd": -0.033480,
                    "fundWeight": 2.9571,
                    "benchmarkWeight": 4.6496,
                    "fundCTR": 0.000012,
                    "benchmarkCTR": 0.001575,
                    "relativeCTR": -0.001563,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "52",
                    "name": "Household Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.000135,
                        "benchmarkReturn": 0.006893,
                        "valueAdd": -0.006759,
                        "fundWeight": 2.9438,
                        "benchmarkWeight": 0.5057,
                        "fundCTR": 0.000004,
                        "benchmarkCTR": 0.000035,
                        "relativeCTR": -0.000031,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "53",
                        "name": "Household Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.000135,
                            "benchmarkReturn": 0.006893,
                            "valueAdd": -0.006759,
                            "fundWeight": 2.9438,
                            "benchmarkWeight": 0.5057,
                            "fundCTR": 0.000004,
                            "benchmarkCTR": 0.000035,
                            "relativeCTR": -0.000031,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "164",
                    "name": "Personal Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.060537,
                        "benchmarkReturn": 0.037234,
                        "valueAdd": 0.023302,
                        "fundWeight": 0.0133,
                        "benchmarkWeight": 4.1439,
                        "fundCTR": 0.000008,
                        "benchmarkCTR": 0.001543,
                        "relativeCTR": -0.001535,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "165",
                        "name": "Personal Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.060537,
                            "benchmarkReturn": 0.037234,
                            "valueAdd": 0.023302,
                            "fundWeight": 0.0133,
                            "benchmarkWeight": 4.1439,
                            "fundCTR": 0.000008,
                            "benchmarkCTR": 0.001543,
                            "relativeCTR": -0.001535,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "45",
                "name": "Food, Beverage & Tobacco",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.039734,
                    "benchmarkReturn": 0.133942,
                    "valueAdd": -0.094207,
                    "fundWeight": 4.4322,
                    "benchmarkWeight": 7.8433,
                    "fundCTR": 0.001761,
                    "benchmarkCTR": 0.010505,
                    "relativeCTR": -0.008744,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "184",
                    "name": "Tobacco",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.081767,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0929,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000076,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "185",
                        "name": "Tobacco",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.081767,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0929,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000076,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "49",
                    "name": "Food Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.024343,
                        "benchmarkReturn": 0.138274,
                        "valueAdd": -0.113931,
                        "fundWeight": 1.5442,
                        "benchmarkWeight": 7.4119,
                        "fundCTR": 0.000376,
                        "benchmarkCTR": 0.010249,
                        "relativeCTR": -0.009873,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "50",
                        "name": "Packaged Foods & Meats",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.021716,
                            "benchmarkReturn": 0.138333,
                            "valueAdd": -0.116617,
                            "fundWeight": 1.2916,
                            "benchmarkWeight": 7.3991,
                            "fundCTR": 0.000280,
                            "benchmarkCTR": 0.010235,
                            "relativeCTR": -0.009955,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "170",
                        "name": "Agricultural Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.037928,
                            "benchmarkReturn": 0.105057,
                            "valueAdd": -0.067130,
                            "fundWeight": 0.2526,
                            "benchmarkWeight": 0.0127,
                            "fundCTR": 0.000096,
                            "benchmarkCTR": 0.000013,
                            "relativeCTR": 0.000082,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "46",
                    "name": "Beverages",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.048055,
                        "benchmarkReturn": 0.057112,
                        "valueAdd": -0.009057,
                        "fundWeight": 2.8881,
                        "benchmarkWeight": 0.3385,
                        "fundCTR": 0.001388,
                        "benchmarkCTR": 0.000193,
                        "relativeCTR": 0.001195,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "47",
                        "name": "Brewers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.050398,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.2121,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000107,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "145",
                        "name": "Soft Drinks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.047921,
                            "benchmarkReturn": 0.075475,
                            "valueAdd": -0.027554,
                            "fundWeight": 2.6610,
                            "benchmarkWeight": 0.0801,
                            "fundCTR": 0.001275,
                            "benchmarkCTR": 0.000060,
                            "relativeCTR": 0.001215,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "48",
                        "name": "Distillers & Vintners",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.049614,
                            "benchmarkReturn": 0.056100,
                            "valueAdd": -0.006486,
                            "fundWeight": 0.2271,
                            "benchmarkWeight": 0.0464,
                            "fundCTR": 0.000113,
                            "benchmarkCTR": 0.000026,
                            "relativeCTR": 0.000087,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "97",
            "name": "Telecommunication Services",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.072609,
                "benchmarkReturn": 0.030587,
                "valueAdd": 0.042023,
                "fundWeight": 8.1731,
                "benchmarkWeight": 9.3613,
                "fundCTR": 0.005934,
                "benchmarkCTR": 0.002863,
                "relativeCTR": 0.003071,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "98",
                "name": "Telecommunication Services",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.027470,
                    "benchmarkReturn": -0.005480,
                    "valueAdd": -0.021990,
                    "fundWeight": 2.0114,
                    "benchmarkWeight": 2.0505,
                    "fundCTR": -0.000553,
                    "benchmarkCTR": -0.000112,
                    "relativeCTR": -0.000440,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "99",
                    "name": "Wireless Telecommunication Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.026891,
                        "benchmarkReturn": 0.104189,
                        "valueAdd": -0.131079,
                        "fundWeight": 0.0274,
                        "benchmarkWeight": 0.2801,
                        "fundCTR": -0.000007,
                        "benchmarkCTR": 0.000292,
                        "relativeCTR": -0.000299,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "100",
                        "name": "Wireless Telecommunication Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.026891,
                            "benchmarkReturn": 0.104189,
                            "valueAdd": -0.131079,
                            "fundWeight": 0.0274,
                            "benchmarkWeight": 0.2801,
                            "fundCTR": -0.000007,
                            "benchmarkCTR": 0.000292,
                            "relativeCTR": -0.000299,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "149",
                    "name": "Diversified Telecommunication Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.027479,
                        "benchmarkReturn": -0.021759,
                        "valueAdd": -0.005720,
                        "fundWeight": 1.9840,
                        "benchmarkWeight": 1.7703,
                        "fundCTR": -0.000545,
                        "benchmarkCTR": -0.000385,
                        "relativeCTR": -0.000160,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "150",
                        "name": "Integrated Telecommunication Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.027479,
                            "benchmarkReturn": -0.023622,
                            "valueAdd": -0.003856,
                            "fundWeight": 1.9840,
                            "benchmarkWeight": 1.7121,
                            "fundCTR": -0.000545,
                            "benchmarkCTR": -0.000404,
                            "relativeCTR": -0.000141,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "221",
                        "name": "Alternative Carriers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.035729,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0582,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000021,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "480",
                "name": "Media & Entertainment",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.107914,
                    "benchmarkReturn": 0.040926,
                    "valueAdd": 0.066988,
                    "fundWeight": 6.1617,
                    "benchmarkWeight": 7.3108,
                    "fundCTR": 0.006649,
                    "benchmarkCTR": 0.002992,
                    "relativeCTR": 0.003657,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "485",
                    "name": "Interactive Media & Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": -0.009556,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 4.0541,
                        "fundCTR": null,
                        "benchmarkCTR": -0.000387,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "486",
                        "name": "50203010",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.009556,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 4.0541,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000387,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "483",
                    "name": "Entertainment",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.168218,
                        "benchmarkReturn": 0.100334,
                        "valueAdd": 0.067885,
                        "fundWeight": 0.0938,
                        "benchmarkWeight": 1.4041,
                        "fundCTR": 0.000158,
                        "benchmarkCTR": 0.001409,
                        "relativeCTR": -0.001251,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "513",
                        "name": "50202020",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.168218,
                            "benchmarkReturn": 0.109538,
                            "valueAdd": 0.058680,
                            "fundWeight": 0.0938,
                            "benchmarkWeight": 0.5781,
                            "fundCTR": 0.000158,
                            "benchmarkCTR": 0.000633,
                            "relativeCTR": -0.000475,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "484",
                        "name": "50202010",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.093993,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.8260,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000776,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "481",
                    "name": "Media",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.106987,
                        "benchmarkReturn": 0.114393,
                        "valueAdd": -0.007405,
                        "fundWeight": 6.0678,
                        "benchmarkWeight": 1.8525,
                        "fundCTR": 0.006492,
                        "benchmarkCTR": 0.002119,
                        "relativeCTR": 0.004373,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "505",
                        "name": "50201040",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.331862,
                            "benchmarkReturn": 0.059549,
                            "valueAdd": 0.272313,
                            "fundWeight": 0.0564,
                            "benchmarkWeight": 0.0101,
                            "fundCTR": 0.000187,
                            "benchmarkCTR": 0.000006,
                            "relativeCTR": 0.000181,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "504",
                        "name": "50201020",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.037435,
                            "benchmarkReturn": 0.080409,
                            "valueAdd": -0.042974,
                            "fundWeight": 0.0152,
                            "benchmarkWeight": 0.0062,
                            "fundCTR": 0.000006,
                            "benchmarkCTR": 0.000005,
                            "relativeCTR": 0.000001,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "503",
                        "name": "50201010",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.024431,
                            "benchmarkReturn": 0.054197,
                            "valueAdd": -0.029766,
                            "fundWeight": 0.1470,
                            "benchmarkWeight": 0.0671,
                            "fundCTR": 0.000036,
                            "benchmarkCTR": 0.000036,
                            "relativeCTR": 0.000000,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "482",
                        "name": "50201030",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.107440,
                            "benchmarkReturn": 0.117197,
                            "valueAdd": -0.009757,
                            "fundWeight": 5.8493,
                            "benchmarkWeight": 1.7691,
                            "fundCTR": 0.006284,
                            "benchmarkCTR": 0.002073,
                            "relativeCTR": 0.004211,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "531",
            "name": "Cash & Cash Equivalents",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.000098,
                "benchmarkReturn": 0.008320,
                "valueAdd": -0.008222,
                "fundWeight": -0.0085,
                "benchmarkWeight": -0.0046,
                "fundCTR": 0.000000,
                "benchmarkCTR": 0.000000,
                "relativeCTR": 0.000000,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "532",
                "name": "Cash and Cash Equivalents",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.000098,
                    "benchmarkReturn": 0.008320,
                    "valueAdd": -0.008222,
                    "fundWeight": -0.0085,
                    "benchmarkWeight": -0.0046,
                    "fundCTR": 0.000000,
                    "benchmarkCTR": 0.000000,
                    "relativeCTR": 0.000000,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "533",
                    "name": "Cash and Cash Equivalents",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.000098,
                        "benchmarkReturn": 0.008320,
                        "valueAdd": -0.008222,
                        "fundWeight": -0.0085,
                        "benchmarkWeight": -0.0046,
                        "fundCTR": 0.000000,
                        "benchmarkCTR": 0.000000,
                        "relativeCTR": 0.000000,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "534",
                        "name": "00000000",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.000098,
                            "benchmarkReturn": 0.008320,
                            "valueAdd": -0.008222,
                            "fundWeight": -0.0085,
                            "benchmarkWeight": -0.0046,
                            "fundCTR": 0.000000,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": 0.000000,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "10",
            "name": "Health Care",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.031232,
                "benchmarkReturn": 0.029965,
                "valueAdd": 0.001267,
                "fundWeight": 13.8587,
                "benchmarkWeight": 13.1840,
                "fundCTR": 0.004328,
                "benchmarkCTR": 0.003951,
                "relativeCTR": 0.000378,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "54",
                "name": "Health Care Equipment & Services",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.031758,
                    "benchmarkReturn": 0.043683,
                    "valueAdd": -0.011925,
                    "fundWeight": 6.6540,
                    "benchmarkWeight": 6.2849,
                    "fundCTR": 0.002113,
                    "benchmarkCTR": 0.002745,
                    "relativeCTR": -0.000632,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "59",
                    "name": "Health Care Technology",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.010447,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.4659,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000049,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "60",
                        "name": "Health Care Technology",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.010447,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.4659,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000049,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "55",
                    "name": "Health Care Equipment & Supplies",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.028417,
                        "benchmarkReturn": 0.052667,
                        "valueAdd": -0.024250,
                        "fundWeight": 2.3711,
                        "benchmarkWeight": 3.0063,
                        "fundCTR": 0.000674,
                        "benchmarkCTR": 0.001583,
                        "relativeCTR": -0.000910,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "245",
                        "name": "Health Care Supplies",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.030069,
                            "benchmarkReturn": 0.042761,
                            "valueAdd": -0.012692,
                            "fundWeight": 0.0409,
                            "benchmarkWeight": 0.8264,
                            "fundCTR": 0.000012,
                            "benchmarkCTR": 0.000353,
                            "relativeCTR": -0.000341,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "56",
                        "name": "Health Care Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.028388,
                            "benchmarkReturn": 0.056473,
                            "valueAdd": -0.028085,
                            "fundWeight": 2.3303,
                            "benchmarkWeight": 2.1799,
                            "fundCTR": 0.000662,
                            "benchmarkCTR": 0.001231,
                            "relativeCTR": -0.000570,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "57",
                    "name": "Health Care Providers & Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.033620,
                        "benchmarkReturn": 0.039658,
                        "valueAdd": -0.006039,
                        "fundWeight": 4.2828,
                        "benchmarkWeight": 2.8127,
                        "fundCTR": 0.001440,
                        "benchmarkCTR": 0.001115,
                        "relativeCTR": 0.000324,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "198",
                        "name": "Health Care Facilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.022617,
                            "benchmarkReturn": 0.043809,
                            "valueAdd": -0.021192,
                            "fundWeight": 0.0824,
                            "benchmarkWeight": 0.0525,
                            "fundCTR": 0.000019,
                            "benchmarkCTR": 0.000023,
                            "relativeCTR": -0.000004,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "186",
                        "name": "Managed Health Care",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.037750,
                            "benchmarkReturn": 0.045350,
                            "valueAdd": -0.007601,
                            "fundWeight": 3.4399,
                            "benchmarkWeight": 2.4961,
                            "fundCTR": 0.001299,
                            "benchmarkCTR": 0.001132,
                            "relativeCTR": 0.000167,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "246",
                        "name": "Health Care Distributors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.027370,
                            "benchmarkReturn": -0.022957,
                            "valueAdd": -0.004413,
                            "fundWeight": 0.2557,
                            "benchmarkWeight": 0.1618,
                            "fundCTR": -0.000070,
                            "benchmarkCTR": -0.000037,
                            "relativeCTR": -0.000033,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "58",
                        "name": "Health Care  Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.039261,
                            "benchmarkReturn": 0.001253,
                            "valueAdd": 0.038009,
                            "fundWeight": 0.5048,
                            "benchmarkWeight": 0.1023,
                            "fundCTR": 0.000198,
                            "benchmarkCTR": 0.000001,
                            "relativeCTR": 0.000197,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "11",
                "name": "Pharmaceuticals, Biotechnology & Life Sciences",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.030689,
                    "benchmarkReturn": 0.017499,
                    "valueAdd": 0.013190,
                    "fundWeight": 7.2047,
                    "benchmarkWeight": 6.8991,
                    "fundCTR": 0.002211,
                    "benchmarkCTR": 0.001207,
                    "relativeCTR": 0.001004,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "61",
                    "name": "Biotechnology",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.021463,
                        "benchmarkReturn": -0.008872,
                        "valueAdd": 0.030335,
                        "fundWeight": 1.2252,
                        "benchmarkWeight": 1.3969,
                        "fundCTR": 0.000263,
                        "benchmarkCTR": -0.000124,
                        "relativeCTR": 0.000387,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "62",
                        "name": "Biotechnology",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.021463,
                            "benchmarkReturn": -0.008872,
                            "valueAdd": 0.030335,
                            "fundWeight": 1.2252,
                            "benchmarkWeight": 1.3969,
                            "fundCTR": 0.000263,
                            "benchmarkCTR": -0.000124,
                            "relativeCTR": 0.000387,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "63",
                    "name": "Life Sciences Tools & Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.025716,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 2.6821,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000690,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "64",
                        "name": "Life Sciences Tools & Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.025716,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 2.6821,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000690,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "12",
                    "name": "Pharmaceuticals",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.032618,
                        "benchmarkReturn": 0.022621,
                        "valueAdd": 0.009996,
                        "fundWeight": 5.9795,
                        "benchmarkWeight": 2.8201,
                        "fundCTR": 0.001950,
                        "benchmarkCTR": 0.000638,
                        "relativeCTR": 0.001312,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "13",
                        "name": "Pharmaceuticals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.032618,
                            "benchmarkReturn": 0.022621,
                            "valueAdd": 0.009996,
                            "fundWeight": 5.9795,
                            "benchmarkWeight": 2.8201,
                            "fundCTR": 0.001950,
                            "benchmarkCTR": 0.000638,
                            "relativeCTR": 0.001312,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "276",
            "name": "Real Estate",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.121551,
                "benchmarkReturn": 0.083116,
                "valueAdd": 0.038435,
                "fundWeight": 0.0906,
                "benchmarkWeight": 3.6530,
                "fundCTR": 0.000110,
                "benchmarkCTR": 0.003036,
                "relativeCTR": -0.002926,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "277",
                "name": "Real Estate",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.121551,
                    "benchmarkReturn": 0.083116,
                    "valueAdd": 0.038435,
                    "fundWeight": 0.0906,
                    "benchmarkWeight": 3.6530,
                    "fundCTR": 0.000110,
                    "benchmarkCTR": 0.003036,
                    "relativeCTR": -0.002926,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "286",
                    "name": "Real Estate Management & Development",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.121551,
                        "benchmarkReturn": 0.028395,
                        "valueAdd": 0.093156,
                        "fundWeight": 0.0906,
                        "benchmarkWeight": 0.3115,
                        "fundCTR": 0.000110,
                        "benchmarkCTR": 0.000088,
                        "relativeCTR": 0.000022,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "291",
                        "name": "Diversified Real Estate Activities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.039175,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1149,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000045,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "288",
                        "name": "Real Estate Development",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.062596,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0184,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000012,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "289",
                        "name": "Real Estate Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.121551,
                            "benchmarkReturn": 0.025842,
                            "valueAdd": 0.095709,
                            "fundWeight": 0.0906,
                            "benchmarkWeight": 0.0013,
                            "fundCTR": 0.000110,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": 0.000110,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "287",
                        "name": "Real Estate Operating Companies",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.084459,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1769,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000149,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "278",
                    "name": "Equity Real Estate Investment Trusts",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.088360,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 3.3415,
                        "fundCTR": null,
                        "benchmarkCTR": 0.002953,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "281",
                        "name": "Office REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.108066,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 1.7619,
                            "fundCTR": null,
                            "benchmarkCTR": 0.001904,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "290",
                        "name": "Hotel & Resort REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.042766,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0013,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000001,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "282",
                        "name": "Health Care REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.064980,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1975,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000128,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "279",
                        "name": "Diversified REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.092612,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.2261,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000209,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "283",
                        "name": "Residential REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.060082,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.6870,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000413,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "284",
                        "name": "Retail REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.090252,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.3139,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000283,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "285",
                        "name": "Specialized REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.002809,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1199,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000003,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "280",
                        "name": "Industrial REITs",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.058107,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0340,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000020,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "76",
            "name": "Information Technology",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.063982,
                "benchmarkReturn": 0.077680,
                "valueAdd": -0.013699,
                "fundWeight": 21.7945,
                "benchmarkWeight": 20.1235,
                "fundCTR": 0.013944,
                "benchmarkCTR": 0.015632,
                "relativeCTR": -0.001688,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "77",
                "name": "Software & Services",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.042625,
                    "benchmarkReturn": 0.075278,
                    "valueAdd": -0.032653,
                    "fundWeight": 8.0789,
                    "benchmarkWeight": 15.7899,
                    "fundCTR": 0.003444,
                    "benchmarkCTR": 0.011886,
                    "relativeCTR": -0.008443,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "80",
                    "name": "IT Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.034730,
                        "benchmarkReturn": 0.102295,
                        "valueAdd": -0.067565,
                        "fundWeight": 3.1956,
                        "benchmarkWeight": 9.1025,
                        "fundCTR": 0.001110,
                        "benchmarkCTR": 0.009311,
                        "relativeCTR": -0.008202,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "502",
                        "name": "45102030",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.043478,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.4091,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000178,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "82",
                        "name": "Data Processing & Outsourced Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.032957,
                            "benchmarkReturn": 0.119345,
                            "valueAdd": -0.086388,
                            "fundWeight": 2.5980,
                            "benchmarkWeight": 7.4612,
                            "fundCTR": 0.000856,
                            "benchmarkCTR": 0.008905,
                            "relativeCTR": -0.008048,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "81",
                        "name": "IT Consulting & Other Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.042560,
                            "benchmarkReturn": 0.024922,
                            "valueAdd": 0.017638,
                            "fundWeight": 0.5976,
                            "benchmarkWeight": 1.2322,
                            "fundCTR": 0.000254,
                            "benchmarkCTR": 0.000307,
                            "relativeCTR": -0.000053,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "83",
                    "name": "Software",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.047887,
                        "benchmarkReturn": 0.039127,
                        "valueAdd": 0.008760,
                        "fundWeight": 4.8833,
                        "benchmarkWeight": 6.6874,
                        "fundCTR": 0.002338,
                        "benchmarkCTR": 0.002617,
                        "relativeCTR": -0.000278,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "84",
                        "name": "Application Software",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.079058,
                            "benchmarkReturn": 0.010273,
                            "valueAdd": 0.068785,
                            "fundWeight": 0.1908,
                            "benchmarkWeight": 5.2650,
                            "fundCTR": 0.000151,
                            "benchmarkCTR": 0.000541,
                            "relativeCTR": -0.000390,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "85",
                        "name": "Systems Software",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.046661,
                            "benchmarkReturn": 0.149471,
                            "valueAdd": -0.102810,
                            "fundWeight": 4.6925,
                            "benchmarkWeight": 1.4225,
                            "fundCTR": 0.002190,
                            "benchmarkCTR": 0.002126,
                            "relativeCTR": 0.000063,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "86",
                "name": "Technology Hardware & Equipment",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.093994,
                    "benchmarkReturn": 0.095513,
                    "valueAdd": -0.001519,
                    "fundWeight": 7.7903,
                    "benchmarkWeight": 3.2400,
                    "fundCTR": 0.007322,
                    "benchmarkCTR": 0.003095,
                    "relativeCTR": 0.004228,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "89",
                    "name": "Technology Hardware, Storage & Peripherals",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.115901,
                        "benchmarkReturn": 0.110254,
                        "valueAdd": 0.005647,
                        "fundWeight": 5.4330,
                        "benchmarkWeight": 2.1580,
                        "fundCTR": 0.006297,
                        "benchmarkCTR": 0.002379,
                        "relativeCTR": 0.003918,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "478",
                        "name": "Technology Hardware, Storage & Peripherals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.115901,
                            "benchmarkReturn": 0.110254,
                            "valueAdd": 0.005647,
                            "fundWeight": 5.4330,
                            "benchmarkWeight": 2.1580,
                            "fundCTR": 0.006297,
                            "benchmarkCTR": 0.002379,
                            "relativeCTR": 0.003918,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "91",
                    "name": "Electronic Equipment, Instruments & Components",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.055001,
                        "benchmarkReturn": 0.068791,
                        "valueAdd": -0.013790,
                        "fundWeight": 1.0214,
                        "benchmarkWeight": 1.0140,
                        "fundCTR": 0.000562,
                        "benchmarkCTR": 0.000698,
                        "relativeCTR": -0.000136,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "92",
                        "name": "Electronic Equipment & Instruments",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.139953,
                            "benchmarkReturn": 0.091220,
                            "valueAdd": 0.048733,
                            "fundWeight": 0.3051,
                            "benchmarkWeight": 0.5471,
                            "fundCTR": 0.000427,
                            "benchmarkCTR": 0.000499,
                            "relativeCTR": -0.000072,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "214",
                        "name": "Technology Distributors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.009934,
                            "benchmarkReturn": 0.051080,
                            "valueAdd": -0.041146,
                            "fundWeight": 0.0444,
                            "benchmarkWeight": 0.0920,
                            "fundCTR": 0.000004,
                            "benchmarkCTR": 0.000047,
                            "relativeCTR": -0.000043,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "250",
                        "name": "Electronic Components",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.005568,
                            "benchmarkReturn": 0.037653,
                            "valueAdd": -0.032085,
                            "fundWeight": 0.4743,
                            "benchmarkWeight": 0.3414,
                            "fundCTR": 0.000026,
                            "benchmarkCTR": 0.000129,
                            "relativeCTR": -0.000102,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "166",
                        "name": "Electronic Manufacturing Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.062085,
                            "benchmarkReturn": 0.078301,
                            "valueAdd": -0.016216,
                            "fundWeight": 0.1976,
                            "benchmarkWeight": 0.0334,
                            "fundCTR": 0.000123,
                            "benchmarkCTR": 0.000026,
                            "relativeCTR": 0.000096,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "87",
                    "name": "Communications Equipment",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.037438,
                        "benchmarkReturn": 0.050070,
                        "valueAdd": -0.012632,
                        "fundWeight": 1.3360,
                        "benchmarkWeight": 0.0680,
                        "fundCTR": 0.000500,
                        "benchmarkCTR": 0.000034,
                        "relativeCTR": 0.000466,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "88",
                        "name": "Telecommunications Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.037438,
                            "benchmarkReturn": 0.050070,
                            "valueAdd": -0.012632,
                            "fundWeight": 1.3360,
                            "benchmarkWeight": 0.0680,
                            "fundCTR": 0.000500,
                            "benchmarkCTR": 0.000034,
                            "relativeCTR": 0.000466,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "93",
                "name": "Semiconductors & Semiconductor Equipment",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.054925,
                    "benchmarkReturn": 0.059345,
                    "valueAdd": -0.004420,
                    "fundWeight": 5.9252,
                    "benchmarkWeight": 1.0937,
                    "fundCTR": 0.003254,
                    "benchmarkCTR": 0.000649,
                    "relativeCTR": 0.002605,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "94",
                    "name": "Semiconductors & Semiconductor Equipment",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.054925,
                        "benchmarkReturn": 0.059345,
                        "valueAdd": -0.004420,
                        "fundWeight": 5.9252,
                        "benchmarkWeight": 1.0937,
                        "fundCTR": 0.003254,
                        "benchmarkCTR": 0.000649,
                        "relativeCTR": 0.002605,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "96",
                        "name": "Semiconductors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.058674,
                            "benchmarkReturn": 0.040821,
                            "valueAdd": 0.017854,
                            "fundWeight": 4.6675,
                            "benchmarkWeight": 0.5671,
                            "fundCTR": 0.002739,
                            "benchmarkCTR": 0.000231,
                            "relativeCTR": 0.002507,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "95",
                        "name": "Semiconductor Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.040743,
                            "benchmarkReturn": 0.079792,
                            "valueAdd": -0.039049,
                            "fundWeight": 1.2577,
                            "benchmarkWeight": 0.5266,
                            "fundCTR": 0.000512,
                            "benchmarkCTR": 0.000420,
                            "relativeCTR": 0.000092,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "24",
            "name": "Materials",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": -0.002564,
                "benchmarkReturn": 0.038709,
                "valueAdd": -0.041273,
                "fundWeight": 9.5417,
                "benchmarkWeight": 5.5485,
                "fundCTR": -0.000245,
                "benchmarkCTR": 0.002148,
                "relativeCTR": -0.002392,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "25",
                "name": "Materials",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.002564,
                    "benchmarkReturn": 0.038709,
                    "valueAdd": -0.041273,
                    "fundWeight": 9.5417,
                    "benchmarkWeight": 5.5485,
                    "fundCTR": -0.000245,
                    "benchmarkCTR": 0.002148,
                    "relativeCTR": -0.002392,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "202",
                    "name": "Paper & Forest Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.139417,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0402,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000056,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "203",
                        "name": "Paper Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.139417,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0402,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000056,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "26",
                    "name": "Chemicals",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.004229,
                        "benchmarkReturn": 0.037716,
                        "valueAdd": -0.041945,
                        "fundWeight": 9.0325,
                        "benchmarkWeight": 4.6125,
                        "fundCTR": -0.000382,
                        "benchmarkCTR": 0.001740,
                        "relativeCTR": -0.002122,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "168",
                        "name": "Specialty Chemicals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.006414,
                            "benchmarkReturn": 0.037407,
                            "valueAdd": -0.043821,
                            "fundWeight": 7.8167,
                            "benchmarkWeight": 4.3706,
                            "fundCTR": -0.000501,
                            "benchmarkCTR": 0.001635,
                            "relativeCTR": -0.002136,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "252",
                        "name": "Commodity Chemicals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.051714,
                            "benchmarkReturn": 0.075992,
                            "valueAdd": -0.024278,
                            "fundWeight": 0.0380,
                            "benchmarkWeight": 0.0361,
                            "fundCTR": 0.000020,
                            "benchmarkCTR": 0.000027,
                            "relativeCTR": -0.000008,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "27",
                        "name": "Fertilizers & Agricultural Chemicals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.132720,
                            "benchmarkReturn": 0.005637,
                            "valueAdd": 0.127084,
                            "fundWeight": 0.0354,
                            "benchmarkWeight": 0.0539,
                            "fundCTR": 0.000047,
                            "benchmarkCTR": 0.000003,
                            "relativeCTR": 0.000044,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "151",
                        "name": "Diversified Chemicals",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.036653,
                            "benchmarkReturn": 0.091343,
                            "valueAdd": -0.054690,
                            "fundWeight": 0.0761,
                            "benchmarkWeight": 0.0827,
                            "fundCTR": 0.000028,
                            "benchmarkCTR": 0.000076,
                            "relativeCTR": -0.000048,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "215",
                        "name": "Industrial Gases",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.003028,
                            "benchmarkReturn": 0.002968,
                            "valueAdd": 0.000061,
                            "fundWeight": 1.0663,
                            "benchmarkWeight": 0.0692,
                            "fundCTR": 0.000032,
                            "benchmarkCTR": 0.000002,
                            "relativeCTR": 0.000030,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "199",
                    "name": "Containers & Packaging",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.055841,
                        "benchmarkReturn": 0.064533,
                        "valueAdd": -0.008691,
                        "fundWeight": 0.2311,
                        "benchmarkWeight": 0.0897,
                        "fundCTR": 0.000129,
                        "benchmarkCTR": 0.000058,
                        "relativeCTR": 0.000071,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "255",
                        "name": "Metal & Glass Containers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.085772,
                            "benchmarkReturn": -0.011974,
                            "valueAdd": 0.097747,
                            "fundWeight": 0.0430,
                            "benchmarkWeight": 0.0102,
                            "fundCTR": 0.000037,
                            "benchmarkCTR": -0.000001,
                            "relativeCTR": 0.000038,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "200",
                        "name": "Paper Packaging",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.049082,
                            "benchmarkReturn": 0.075002,
                            "valueAdd": -0.025920,
                            "fundWeight": 0.1881,
                            "benchmarkWeight": 0.0795,
                            "fundCTR": 0.000092,
                            "benchmarkCTR": 0.000060,
                            "relativeCTR": 0.000033,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "253",
                    "name": "Construction Materials",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.061924,
                        "benchmarkReturn": 0.061585,
                        "valueAdd": 0.000339,
                        "fundWeight": 0.0363,
                        "benchmarkWeight": 0.2482,
                        "fundCTR": 0.000022,
                        "benchmarkCTR": 0.000153,
                        "relativeCTR": -0.000130,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "254",
                        "name": "Construction Materials",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.061924,
                            "benchmarkReturn": 0.061585,
                            "valueAdd": 0.000339,
                            "fundWeight": 0.0363,
                            "benchmarkWeight": 0.2482,
                            "fundCTR": 0.000022,
                            "benchmarkCTR": 0.000153,
                            "relativeCTR": -0.000130,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "28",
                    "name": "Metals & Mining",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.004454,
                        "benchmarkReturn": 0.025700,
                        "valueAdd": -0.021245,
                        "fundWeight": 0.2419,
                        "benchmarkWeight": 0.5579,
                        "fundCTR": 0.000011,
                        "benchmarkCTR": 0.000143,
                        "relativeCTR": -0.000133,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "470",
                        "name": "15104025",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.194828,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0230,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000045,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "29",
                        "name": "Diversified Metals & Mining",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.160946,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0756,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000122,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "189",
                        "name": "Steel",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.007491,
                            "benchmarkReturn": 0.172379,
                            "valueAdd": -0.164888,
                            "fundWeight": 0.2261,
                            "benchmarkWeight": 0.0524,
                            "fundCTR": 0.000017,
                            "benchmarkCTR": 0.000090,
                            "relativeCTR": -0.000073,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "109",
                        "name": "Gold",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.037205,
                            "benchmarkReturn": -0.021784,
                            "valueAdd": -0.015421,
                            "fundWeight": 0.0157,
                            "benchmarkWeight": 0.4070,
                            "fundCTR": -0.000006,
                            "benchmarkCTR": -0.000089,
                            "relativeCTR": 0.000083,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "14",
            "name": "Utilities",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.006810,
                "benchmarkReturn": 0.030747,
                "valueAdd": -0.023937,
                "fundWeight": 3.5687,
                "benchmarkWeight": 0.8531,
                "fundCTR": 0.000243,
                "benchmarkCTR": 0.000262,
                "relativeCTR": -0.000019,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "15",
                "name": "Utilities",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.006810,
                    "benchmarkReturn": 0.030747,
                    "valueAdd": -0.023937,
                    "fundWeight": 3.5687,
                    "benchmarkWeight": 0.8531,
                    "fundCTR": 0.000243,
                    "benchmarkCTR": 0.000262,
                    "relativeCTR": -0.000019,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "101",
                    "name": "Multi-Utilities",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.012008,
                        "benchmarkReturn": 0.023225,
                        "valueAdd": -0.035233,
                        "fundWeight": 1.0733,
                        "benchmarkWeight": 0.2079,
                        "fundCTR": -0.000129,
                        "benchmarkCTR": 0.000048,
                        "relativeCTR": -0.000177,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "102",
                        "name": "Multi-Utilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.012008,
                            "benchmarkReturn": 0.023225,
                            "valueAdd": -0.035233,
                            "fundWeight": 1.0733,
                            "benchmarkWeight": 0.2079,
                            "fundCTR": -0.000129,
                            "benchmarkCTR": 0.000048,
                            "relativeCTR": -0.000177,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "16",
                    "name": "Water Utilities",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.021200,
                        "benchmarkReturn": 0.026574,
                        "valueAdd": -0.005374,
                        "fundWeight": 0.1206,
                        "benchmarkWeight": 0.0604,
                        "fundCTR": 0.000026,
                        "benchmarkCTR": 0.000016,
                        "relativeCTR": 0.000010,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "17",
                        "name": "Water Utilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.021200,
                            "benchmarkReturn": 0.026574,
                            "valueAdd": -0.005374,
                            "fundWeight": 0.1206,
                            "benchmarkWeight": 0.0604,
                            "fundCTR": 0.000026,
                            "benchmarkCTR": 0.000016,
                            "relativeCTR": 0.000010,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "212",
                    "name": "Gas Utilities",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.007563,
                        "benchmarkReturn": -0.003151,
                        "valueAdd": -0.004412,
                        "fundWeight": 0.1670,
                        "benchmarkWeight": 0.0642,
                        "fundCTR": -0.000013,
                        "benchmarkCTR": -0.000002,
                        "relativeCTR": -0.000011,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "213",
                        "name": "Gas Utilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.007563,
                            "benchmarkReturn": -0.003151,
                            "valueAdd": -0.004412,
                            "fundWeight": 0.1670,
                            "benchmarkWeight": 0.0642,
                            "fundCTR": -0.000013,
                            "benchmarkCTR": -0.000002,
                            "relativeCTR": -0.000011,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "207",
                    "name": "Independent Power and Renewable Electricity Produc",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.148704,
                        "benchmarkReturn": 0.072701,
                        "valueAdd": 0.076003,
                        "fundWeight": 0.1037,
                        "benchmarkWeight": 0.0338,
                        "fundCTR": 0.000154,
                        "benchmarkCTR": 0.000025,
                        "relativeCTR": 0.000130,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "508",
                        "name": "Renewable Electricity",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.145572,
                            "benchmarkReturn": null,
                            "valueAdd": null,
                            "fundWeight": 0.0240,
                            "benchmarkWeight": null,
                            "fundCTR": 0.000035,
                            "benchmarkCTR": null,
                            "relativeCTR": null,
                            "statusCode": 2730,
                            "message": "No benchmark return data"
                          }
                        ]
                      },
                      {
                        "id": "208",
                        "name": "Independent Power Producers & Energy Traders",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.149706,
                            "benchmarkReturn": 0.072701,
                            "valueAdd": 0.077005,
                            "fundWeight": 0.0797,
                            "benchmarkWeight": 0.0338,
                            "fundCTR": 0.000119,
                            "benchmarkCTR": 0.000025,
                            "relativeCTR": 0.000095,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "160",
                    "name": "Electric Utilities",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.010291,
                        "benchmarkReturn": 0.035117,
                        "valueAdd": -0.024826,
                        "fundWeight": 2.1041,
                        "benchmarkWeight": 0.4868,
                        "fundCTR": 0.000217,
                        "benchmarkCTR": 0.000171,
                        "relativeCTR": 0.000046,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "161",
                        "name": "Electric Utilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.010291,
                            "benchmarkReturn": 0.035117,
                            "valueAdd": -0.024826,
                            "fundWeight": 2.1041,
                            "benchmarkWeight": 0.4868,
                            "fundCTR": 0.000217,
                            "benchmarkCTR": 0.000171,
                            "relativeCTR": 0.000046,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "40",
            "name": "Consumer Discretionary",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": -0.006169,
                "benchmarkReturn": 0.064568,
                "valueAdd": -0.070737,
                "fundWeight": 7.8433,
                "benchmarkWeight": 12.1637,
                "fundCTR": -0.000484,
                "benchmarkCTR": 0.007854,
                "relativeCTR": -0.008338,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "133",
                "name": "Retailing",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.023919,
                    "benchmarkReturn": 0.043308,
                    "valueAdd": -0.067227,
                    "fundWeight": 4.2198,
                    "benchmarkWeight": 5.9624,
                    "fundCTR": -0.001009,
                    "benchmarkCTR": 0.002582,
                    "relativeCTR": -0.003592,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "136",
                    "name": "Multiline Retail",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.030007,
                        "benchmarkReturn": 0.001462,
                        "valueAdd": -0.031469,
                        "fundWeight": 1.4493,
                        "benchmarkWeight": 0.1125,
                        "fundCTR": -0.000435,
                        "benchmarkCTR": 0.000002,
                        "relativeCTR": -0.000437,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "154",
                        "name": "General Merchandise Stores",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.030007,
                            "benchmarkReturn": -0.004639,
                            "valueAdd": -0.025367,
                            "fundWeight": 1.4493,
                            "benchmarkWeight": 0.0993,
                            "fundCTR": -0.000435,
                            "benchmarkCTR": -0.000005,
                            "relativeCTR": -0.000430,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "137",
                        "name": "Department Stores",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.048561,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0132,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000006,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "138",
                    "name": "Specialty Retail",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.022977,
                        "benchmarkReturn": 0.064263,
                        "valueAdd": -0.087240,
                        "fundWeight": 2.6733,
                        "benchmarkWeight": 1.6168,
                        "fundCTR": -0.000614,
                        "benchmarkCTR": 0.001039,
                        "relativeCTR": -0.001653,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "243",
                        "name": "Computer & Electronics Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.077757,
                            "benchmarkReturn": -0.039911,
                            "valueAdd": -0.037847,
                            "fundWeight": 0.1149,
                            "benchmarkWeight": 0.0521,
                            "fundCTR": -0.000089,
                            "benchmarkCTR": -0.000021,
                            "relativeCTR": -0.000069,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "195",
                        "name": "Automotive Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.031595,
                            "benchmarkReturn": 0.045602,
                            "valueAdd": -0.014007,
                            "fundWeight": 0.1998,
                            "benchmarkWeight": 0.3565,
                            "fundCTR": 0.000063,
                            "benchmarkCTR": 0.000163,
                            "relativeCTR": -0.000099,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "262",
                        "name": "Homefurnishing Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.069699,
                            "benchmarkReturn": -0.016703,
                            "valueAdd": -0.052996,
                            "fundWeight": 0.0484,
                            "benchmarkWeight": 0.1594,
                            "fundCTR": -0.000034,
                            "benchmarkCTR": -0.000027,
                            "relativeCTR": -0.000007,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "139",
                        "name": "Apparel Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.110237,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.8445,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000931,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "177",
                        "name": "Home Improvement Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.024852,
                            "benchmarkReturn": -0.012790,
                            "valueAdd": -0.012063,
                            "fundWeight": 2.2099,
                            "benchmarkWeight": 0.1257,
                            "fundCTR": -0.000549,
                            "benchmarkCTR": -0.000016,
                            "relativeCTR": -0.000533,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "140",
                        "name": "Specialty Stores",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.000850,
                            "benchmarkReturn": 0.025958,
                            "valueAdd": -0.026808,
                            "fundWeight": 0.1004,
                            "benchmarkWeight": 0.0786,
                            "fundCTR": -0.000001,
                            "benchmarkCTR": 0.000020,
                            "relativeCTR": -0.000021,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "134",
                    "name": "Internet & Catalog Retail",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.036563,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 4.2131,
                        "fundCTR": null,
                        "benchmarkCTR": 0.001540,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "545",
                        "name": "UNKNOWN",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.104738,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0142,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000015,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "135",
                        "name": "Internet Retail",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.036335,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 4.1989,
                            "fundCTR": null,
                            "benchmarkCTR": 0.001526,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "241",
                    "name": "Distributors",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.042891,
                        "benchmarkReturn": 0.020056,
                        "valueAdd": 0.022835,
                        "fundWeight": 0.0972,
                        "benchmarkWeight": 0.0201,
                        "fundCTR": 0.000042,
                        "benchmarkCTR": 0.000004,
                        "relativeCTR": 0.000038,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "242",
                        "name": "Distributors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.042891,
                            "benchmarkReturn": 0.020056,
                            "valueAdd": 0.022835,
                            "fundWeight": 0.0972,
                            "benchmarkWeight": 0.0201,
                            "fundCTR": 0.000042,
                            "benchmarkCTR": 0.000004,
                            "relativeCTR": 0.000038,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "115",
                "name": "Automobiles & Components",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.032020,
                    "benchmarkReturn": 0.156191,
                    "valueAdd": -0.188212,
                    "fundWeight": 0.1357,
                    "benchmarkWeight": 1.2870,
                    "fundCTR": -0.000043,
                    "benchmarkCTR": 0.002010,
                    "relativeCTR": -0.002054,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "196",
                    "name": "Auto Components",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.019361,
                        "benchmarkReturn": 0.099964,
                        "valueAdd": -0.080603,
                        "fundWeight": 0.0618,
                        "benchmarkWeight": 0.2527,
                        "fundCTR": 0.000012,
                        "benchmarkCTR": 0.000253,
                        "relativeCTR": -0.000241,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "205",
                        "name": "Auto Parts & Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.019361,
                            "benchmarkReturn": 0.109350,
                            "valueAdd": -0.089988,
                            "fundWeight": 0.0618,
                            "benchmarkWeight": 0.2269,
                            "fundCTR": 0.000012,
                            "benchmarkCTR": 0.000248,
                            "relativeCTR": -0.000236,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "197",
                        "name": "Tires & Rubber",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.019633,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0258,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000005,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "116",
                    "name": "Automobiles",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.072669,
                        "benchmarkReturn": 0.170397,
                        "valueAdd": -0.243066,
                        "fundWeight": 0.0739,
                        "benchmarkWeight": 1.0343,
                        "fundCTR": -0.000054,
                        "benchmarkCTR": 0.001762,
                        "relativeCTR": -0.001816,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "118",
                        "name": "Motorcycle Manufacturers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.088594,
                            "benchmarkReturn": 0.080958,
                            "valueAdd": -0.169552,
                            "fundWeight": 0.0520,
                            "benchmarkWeight": 0.0037,
                            "fundCTR": -0.000046,
                            "benchmarkCTR": 0.000003,
                            "relativeCTR": -0.000049,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "117",
                        "name": "Automobile Manufacturers",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.032225,
                            "benchmarkReturn": 0.170719,
                            "valueAdd": -0.202944,
                            "fundWeight": 0.0219,
                            "benchmarkWeight": 1.0307,
                            "fundCTR": -0.000007,
                            "benchmarkCTR": 0.001760,
                            "relativeCTR": -0.001767,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "127",
                "name": "Consumer Services",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.016501,
                    "benchmarkReturn": 0.047717,
                    "valueAdd": -0.031217,
                    "fundWeight": 2.4255,
                    "benchmarkWeight": 0.8045,
                    "fundCTR": 0.000400,
                    "benchmarkCTR": 0.000384,
                    "relativeCTR": 0.000016,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "130",
                    "name": "Diversified Consumer Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.013775,
                        "benchmarkReturn": null,
                        "valueAdd": null,
                        "fundWeight": 0.0497,
                        "benchmarkWeight": null,
                        "fundCTR": 0.000007,
                        "benchmarkCTR": null,
                        "relativeCTR": null,
                        "statusCode": 2730,
                        "message": "No benchmark return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "131",
                        "name": "Specialized Consumer Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.013775,
                            "benchmarkReturn": null,
                            "valueAdd": null,
                            "fundWeight": 0.0497,
                            "benchmarkWeight": null,
                            "fundCTR": 0.000007,
                            "benchmarkCTR": null,
                            "relativeCTR": null,
                            "statusCode": 2730,
                            "message": "No benchmark return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "128",
                    "name": "Hotels, Restaurants & Leisure",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.016558,
                        "benchmarkReturn": 0.047717,
                        "valueAdd": -0.031159,
                        "fundWeight": 2.3758,
                        "benchmarkWeight": 0.8045,
                        "fundCTR": 0.000393,
                        "benchmarkCTR": 0.000384,
                        "relativeCTR": 0.000009,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "260",
                        "name": "Leisure Facilities",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.030215,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1288,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000039,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "182",
                        "name": "Casinos & Gaming",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.092089,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.2854,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000263,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "129",
                        "name": "Restaurants",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.017182,
                            "benchmarkReturn": 0.040161,
                            "valueAdd": -0.022979,
                            "fundWeight": 2.2714,
                            "benchmarkWeight": 0.2168,
                            "fundCTR": 0.000390,
                            "benchmarkCTR": 0.000087,
                            "relativeCTR": 0.000303,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "188",
                        "name": "Hotels, Resorts & Cruise Lines",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.002567,
                            "benchmarkReturn": 0.046879,
                            "valueAdd": -0.044313,
                            "fundWeight": 0.1044,
                            "benchmarkWeight": 0.1735,
                            "fundCTR": 0.000003,
                            "benchmarkCTR": 0.000081,
                            "relativeCTR": -0.000079,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "119",
                "name": "Consumer Durables & Apparel",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.018980,
                    "benchmarkReturn": 0.072085,
                    "valueAdd": -0.053106,
                    "fundWeight": 1.0622,
                    "benchmarkWeight": 4.1097,
                    "fundCTR": 0.000202,
                    "benchmarkCTR": 0.002963,
                    "relativeCTR": -0.002761,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "120",
                    "name": "Household Durables",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.051274,
                        "benchmarkReturn": 0.052390,
                        "valueAdd": -0.103664,
                        "fundWeight": 0.1714,
                        "benchmarkWeight": 0.3725,
                        "fundCTR": -0.000088,
                        "benchmarkCTR": 0.000195,
                        "relativeCTR": -0.000283,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "275",
                        "name": "Housewares & Specialties",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.000738,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0029,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "190",
                        "name": "Consumer Electronics",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.068139,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.2853,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000194,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "240",
                        "name": "Household Appliances",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.072368,
                            "benchmarkReturn": -0.072368,
                            "valueAdd": 0.000000,
                            "fundWeight": 0.0708,
                            "benchmarkWeight": 0.0260,
                            "fundCTR": -0.000051,
                            "benchmarkCTR": -0.000019,
                            "relativeCTR": -0.000032,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "191",
                        "name": "Home Furnishings",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.037123,
                            "benchmarkReturn": 0.120162,
                            "valueAdd": -0.083039,
                            "fundWeight": 0.0334,
                            "benchmarkWeight": 0.0238,
                            "fundCTR": 0.000012,
                            "benchmarkCTR": 0.000029,
                            "relativeCTR": -0.000016,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "121",
                        "name": "Homebuilding",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.072011,
                            "benchmarkReturn": -0.015345,
                            "valueAdd": -0.056666,
                            "fundWeight": 0.0671,
                            "benchmarkWeight": 0.0345,
                            "fundCTR": -0.000048,
                            "benchmarkCTR": -0.000005,
                            "relativeCTR": -0.000043,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "124",
                    "name": "Textiles, Apparel & Luxury Goods",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.041629,
                        "benchmarkReturn": 0.075448,
                        "valueAdd": -0.033819,
                        "fundWeight": 0.7135,
                        "benchmarkWeight": 3.6784,
                        "fundCTR": 0.000297,
                        "benchmarkCTR": 0.002775,
                        "relativeCTR": -0.002478,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "126",
                        "name": "Footwear",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.052300,
                            "benchmarkReturn": 0.070491,
                            "valueAdd": -0.018191,
                            "fundWeight": 0.4421,
                            "benchmarkWeight": 0.1701,
                            "fundCTR": 0.000231,
                            "benchmarkCTR": 0.000120,
                            "relativeCTR": 0.000111,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "125",
                        "name": "Apparel, Accessories & Luxury Goods",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.029991,
                            "benchmarkReturn": 0.075691,
                            "valueAdd": -0.045700,
                            "fundWeight": 0.2714,
                            "benchmarkWeight": 3.5084,
                            "fundCTR": 0.000081,
                            "benchmarkCTR": 0.002656,
                            "relativeCTR": -0.002574,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "122",
                    "name": "Leisure Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.005874,
                        "benchmarkReturn": -0.006733,
                        "valueAdd": 0.012607,
                        "fundWeight": 0.1774,
                        "benchmarkWeight": 0.0588,
                        "fundCTR": 0.000010,
                        "benchmarkCTR": -0.000004,
                        "relativeCTR": 0.000014,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "123",
                        "name": "Leisure Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.005874,
                            "benchmarkReturn": -0.006733,
                            "valueAdd": 0.012607,
                            "fundWeight": 0.1774,
                            "benchmarkWeight": 0.0588,
                            "fundCTR": 0.000010,
                            "benchmarkCTR": -0.000004,
                            "relativeCTR": 0.000014,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "18",
            "name": "Energy",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.002932,
                "benchmarkReturn": -0.004426,
                "valueAdd": 0.007358,
                "fundWeight": 2.0147,
                "benchmarkWeight": 1.3455,
                "fundCTR": 0.000059,
                "benchmarkCTR": -0.000060,
                "relativeCTR": 0.000119,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "19",
                "name": "Energy",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.002932,
                    "benchmarkReturn": -0.004426,
                    "valueAdd": 0.007358,
                    "fundWeight": 2.0147,
                    "benchmarkWeight": 1.3455,
                    "fundCTR": 0.000059,
                    "benchmarkCTR": -0.000060,
                    "relativeCTR": 0.000119,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "20",
                    "name": "Energy Equipment & Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.120172,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0096,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000011,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "21",
                        "name": "Oil & Gas Equipment & Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.120172,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0096,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000011,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "22",
                    "name": "Oil, Gas & Consumable Fuels",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.002932,
                        "benchmarkReturn": -0.005240,
                        "valueAdd": 0.008172,
                        "fundWeight": 2.0147,
                        "benchmarkWeight": 1.3359,
                        "fundCTR": 0.000059,
                        "benchmarkCTR": -0.000070,
                        "relativeCTR": 0.000129,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "23",
                        "name": "Integrated Oil & Gas",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.032248,
                            "benchmarkReturn": -0.011667,
                            "valueAdd": -0.020581,
                            "fundWeight": 1.3529,
                            "benchmarkWeight": 0.9753,
                            "fundCTR": -0.000436,
                            "benchmarkCTR": -0.000114,
                            "relativeCTR": -0.000323,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "108",
                        "name": "Oil & Gas Exploration & Production",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.000000,
                            "benchmarkReturn": 0.059275,
                            "valueAdd": -0.059275,
                            "fundWeight": 0.0014,
                            "benchmarkWeight": 0.1533,
                            "fundCTR": 0.000000,
                            "benchmarkCTR": 0.000091,
                            "relativeCTR": -0.000091,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "251",
                        "name": "Coal & Consumable Fuels",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.337500,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0035,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000012,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "103",
                        "name": "Oil & Gas Storage & Transportation",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.051885,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1615,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000084,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "167",
                        "name": "Oil & Gas Refining & Marketing",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.079108,
                            "benchmarkReturn": 0.079322,
                            "valueAdd": -0.000214,
                            "fundWeight": 0.6604,
                            "benchmarkWeight": 0.0423,
                            "fundCTR": 0.000522,
                            "benchmarkCTR": 0.000034,
                            "relativeCTR": 0.000489,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "6",
            "name": "Industrials",
            "calculationType": "CTR",
            "methodology": "geometricCompounding",
            "benchmarks": [
              {
                "startDate": "20201201",
                "endDate": "20201231",
                "id": "BSLN0003",
                "name": "Global Equity Fund"
              }
            ],
            "drillable": true,
            "securities": false,
            "periods": [
              {
                "type": "Custom",
                "startDate": "20201201",
                "endDate": "20201231",
                "returnType": "Gross",
                "fundReturn": 0.011359,
                "benchmarkReturn": 0.043693,
                "valueAdd": -0.032334,
                "fundWeight": 9.6145,
                "benchmarkWeight": 11.3451,
                "fundCTR": 0.001092,
                "benchmarkCTR": 0.004957,
                "relativeCTR": -0.003865,
                "statusCode": 0,
                "message": "OK"
              }
            ],
            "group": [
              {
                "id": "37",
                "name": "Commercial  & Professional Services",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.001514,
                    "benchmarkReturn": 0.046752,
                    "valueAdd": -0.045238,
                    "fundWeight": 0.5235,
                    "benchmarkWeight": 3.1046,
                    "fundCTR": 0.000008,
                    "benchmarkCTR": 0.001451,
                    "relativeCTR": -0.001444,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "232",
                    "name": "Commercial Services & Supplies",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.001622,
                        "benchmarkReturn": -0.028925,
                        "valueAdd": 0.030547,
                        "fundWeight": 0.4471,
                        "benchmarkWeight": 0.1897,
                        "fundCTR": 0.000007,
                        "benchmarkCTR": -0.000055,
                        "relativeCTR": 0.000062,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "238",
                        "name": "Diversified Support Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.017277,
                            "benchmarkReturn": 0.000067,
                            "valueAdd": 0.017211,
                            "fundWeight": 0.0629,
                            "benchmarkWeight": 0.0525,
                            "fundCTR": 0.000011,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": 0.000011,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "257",
                        "name": "Office Services & Supplies",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.000369,
                            "benchmarkReturn": null,
                            "valueAdd": null,
                            "fundWeight": 0.0796,
                            "benchmarkWeight": null,
                            "fundCTR": 0.000000,
                            "benchmarkCTR": null,
                            "relativeCTR": null,
                            "statusCode": 2730,
                            "message": "No benchmark return data"
                          }
                        ]
                      },
                      {
                        "id": "258",
                        "name": "Security & Alarm Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": -0.073875,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0716,
                            "fundCTR": null,
                            "benchmarkCTR": -0.000053,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "234",
                        "name": "Environmental & Facilities Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.005782,
                            "benchmarkReturn": -0.000322,
                            "valueAdd": -0.005460,
                            "fundWeight": 0.2970,
                            "benchmarkWeight": 0.0656,
                            "fundCTR": -0.000017,
                            "benchmarkCTR": 0.000000,
                            "relativeCTR": -0.000017,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "233",
                        "name": "Commercial Printing",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.195564,
                            "benchmarkReturn": null,
                            "valueAdd": null,
                            "fundWeight": 0.0077,
                            "benchmarkWeight": null,
                            "fundCTR": 0.000015,
                            "benchmarkCTR": null,
                            "relativeCTR": null,
                            "statusCode": 2730,
                            "message": "No benchmark return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "38",
                    "name": "Professional Services",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.000846,
                        "benchmarkReturn": 0.051979,
                        "valueAdd": -0.051133,
                        "fundWeight": 0.0763,
                        "benchmarkWeight": 2.9149,
                        "fundCTR": 0.000001,
                        "benchmarkCTR": 0.001515,
                        "relativeCTR": -0.001514,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "39",
                        "name": "Research & Consulting Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.086924,
                            "benchmarkReturn": 0.052905,
                            "valueAdd": 0.034019,
                            "fundWeight": 0.0073,
                            "benchmarkWeight": 2.8132,
                            "fundCTR": 0.000006,
                            "benchmarkCTR": 0.001488,
                            "relativeCTR": -0.001482,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "169",
                        "name": "Human Resource & Employment Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.008052,
                            "benchmarkReturn": 0.026726,
                            "valueAdd": -0.034778,
                            "fundWeight": 0.0690,
                            "benchmarkWeight": 0.1017,
                            "fundCTR": -0.000006,
                            "benchmarkCTR": 0.000027,
                            "relativeCTR": -0.000033,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "7",
                "name": "Capital Goods",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": 0.017401,
                    "benchmarkReturn": 0.029683,
                    "valueAdd": -0.012282,
                    "fundWeight": 6.9900,
                    "benchmarkWeight": 5.8906,
                    "fundCTR": 0.001216,
                    "benchmarkCTR": 0.001749,
                    "relativeCTR": -0.000532,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "33",
                    "name": "Industrial Conglomerates",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.027670,
                        "benchmarkReturn": 0.060253,
                        "valueAdd": -0.032582,
                        "fundWeight": 1.3051,
                        "benchmarkWeight": 0.6270,
                        "fundCTR": 0.000361,
                        "benchmarkCTR": 0.000378,
                        "relativeCTR": -0.000017,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "34",
                        "name": "Industrial Conglomerates",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.027670,
                            "benchmarkReturn": 0.060253,
                            "valueAdd": -0.032582,
                            "fundWeight": 1.3051,
                            "benchmarkWeight": 0.6270,
                            "fundCTR": 0.000361,
                            "benchmarkCTR": 0.000378,
                            "relativeCTR": -0.000017,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "236",
                    "name": "Building Products",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.003763,
                        "benchmarkReturn": 0.016882,
                        "valueAdd": -0.013119,
                        "fundWeight": 0.5121,
                        "benchmarkWeight": 1.0654,
                        "fundCTR": 0.000019,
                        "benchmarkCTR": 0.000180,
                        "relativeCTR": -0.000161,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "237",
                        "name": "Building Products",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.003763,
                            "benchmarkReturn": 0.016882,
                            "valueAdd": -0.013119,
                            "fundWeight": 0.5121,
                            "benchmarkWeight": 1.0654,
                            "fundCTR": 0.000019,
                            "benchmarkCTR": 0.000180,
                            "relativeCTR": -0.000161,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "30",
                    "name": "Electrical Equipment",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.021668,
                        "benchmarkReturn": 0.043923,
                        "valueAdd": -0.022255,
                        "fundWeight": 0.5090,
                        "benchmarkWeight": 0.3533,
                        "fundCTR": 0.000110,
                        "benchmarkCTR": 0.000155,
                        "relativeCTR": -0.000045,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "31",
                        "name": "Electrical Components & Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.021668,
                            "benchmarkReturn": 0.012707,
                            "valueAdd": 0.008961,
                            "fundWeight": 0.5090,
                            "benchmarkWeight": 0.2633,
                            "fundCTR": 0.000110,
                            "benchmarkCTR": 0.000033,
                            "relativeCTR": 0.000077,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "32",
                        "name": "Heavy Electrical Equipment",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.139768,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0899,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000126,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "110",
                    "name": "Aerospace & Defense",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.006152,
                        "benchmarkReturn": 0.037508,
                        "valueAdd": -0.043660,
                        "fundWeight": 1.4951,
                        "benchmarkWeight": 1.9383,
                        "fundCTR": -0.000092,
                        "benchmarkCTR": 0.000727,
                        "relativeCTR": -0.000819,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "111",
                        "name": "Aerospace & Defense",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.006152,
                            "benchmarkReturn": 0.037508,
                            "valueAdd": -0.043660,
                            "fundWeight": 1.4951,
                            "benchmarkWeight": 1.9383,
                            "fundCTR": -0.000092,
                            "benchmarkCTR": 0.000727,
                            "relativeCTR": -0.000819,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "193",
                    "name": "Construction & Engineering",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.012624,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0916,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000012,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "194",
                        "name": "Construction & Engineering",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.012624,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0916,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000012,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "8",
                    "name": "Trading Companies & Distributors",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.002307,
                        "benchmarkReturn": 0.083759,
                        "valueAdd": -0.081453,
                        "fundWeight": 0.2796,
                        "benchmarkWeight": 0.3549,
                        "fundCTR": 0.000006,
                        "benchmarkCTR": 0.000297,
                        "relativeCTR": -0.000291,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "9",
                        "name": "Trading Companies & Distributors",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.002307,
                            "benchmarkReturn": 0.083759,
                            "valueAdd": -0.081453,
                            "fundWeight": 0.2796,
                            "benchmarkWeight": 0.3549,
                            "fundCTR": 0.000006,
                            "benchmarkCTR": 0.000297,
                            "relativeCTR": -0.000291,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "35",
                    "name": "Machinery",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.028304,
                        "benchmarkReturn": 0.001469,
                        "valueAdd": 0.026835,
                        "fundWeight": 2.8891,
                        "benchmarkWeight": 1.4600,
                        "fundCTR": 0.000818,
                        "benchmarkCTR": 0.000021,
                        "relativeCTR": 0.000796,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "152",
                        "name": "Construction & Farm Machinery & Heavy Trucks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.034486,
                            "benchmarkReturn": 0.038813,
                            "valueAdd": -0.004328,
                            "fundWeight": 1.0910,
                            "benchmarkWeight": 0.1468,
                            "fundCTR": 0.000376,
                            "benchmarkCTR": 0.000057,
                            "relativeCTR": 0.000319,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "494",
                        "name": "Agricultural & Farm Machinery",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.068383,
                            "benchmarkReturn": 0.095903,
                            "valueAdd": -0.027520,
                            "fundWeight": 0.0328,
                            "benchmarkWeight": 0.0259,
                            "fundCTR": 0.000022,
                            "benchmarkCTR": 0.000025,
                            "relativeCTR": -0.000002,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "36",
                        "name": "Industrial Machinery",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.023802,
                            "benchmarkReturn": -0.004509,
                            "valueAdd": 0.028311,
                            "fundWeight": 1.7652,
                            "benchmarkWeight": 1.2873,
                            "fundCTR": 0.000420,
                            "benchmarkCTR": -0.000058,
                            "relativeCTR": 0.000478,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "112",
                "name": "Transportation",
                "calculationType": "CTR",
                "methodology": "geometricCompounding",
                "benchmarks": [
                  {
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "id": "BSLN0003",
                    "name": "Global Equity Fund"
                  }
                ],
                "drillable": true,
                "securities": false,
                "periods": [
                  {
                    "type": "Custom",
                    "startDate": "20201201",
                    "endDate": "20201231",
                    "returnType": "Gross",
                    "fundReturn": -0.006078,
                    "benchmarkReturn": 0.075949,
                    "valueAdd": -0.082026,
                    "fundWeight": 2.1011,
                    "benchmarkWeight": 2.3500,
                    "fundCTR": -0.000128,
                    "benchmarkCTR": 0.001785,
                    "relativeCTR": -0.001912,
                    "statusCode": 0,
                    "message": "OK"
                  }
                ],
                "group": [
                  {
                    "id": "269",
                    "name": "Transportation Infrastructure",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.064862,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.1335,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000087,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "270",
                        "name": "Airport Services",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.065743,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.1293,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000085,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      },
                      {
                        "id": "271",
                        "name": "Highways & Railtracks",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.038082,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0042,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000002,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "113",
                    "name": "Air Freight & Logistics",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": -0.025955,
                        "benchmarkReturn": 0.031061,
                        "valueAdd": -0.057017,
                        "fundWeight": 1.1447,
                        "benchmarkWeight": 0.2897,
                        "fundCTR": -0.000297,
                        "benchmarkCTR": 0.000090,
                        "relativeCTR": -0.000387,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "114",
                        "name": "Air Freight & Logistics",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": -0.025955,
                            "benchmarkReturn": 0.031061,
                            "valueAdd": -0.057017,
                            "fundWeight": 1.1447,
                            "benchmarkWeight": 0.2897,
                            "fundCTR": -0.000297,
                            "benchmarkCTR": 0.000090,
                            "relativeCTR": -0.000387,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "180",
                    "name": "Road & Rail",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": 0.017896,
                        "benchmarkReturn": 0.033479,
                        "valueAdd": -0.015584,
                        "fundWeight": 0.9564,
                        "benchmarkWeight": 0.3343,
                        "fundCTR": 0.000171,
                        "benchmarkCTR": 0.000112,
                        "relativeCTR": 0.000059,
                        "statusCode": 0,
                        "message": "OK"
                      }
                    ],
                    "group": [
                      {
                        "id": "239",
                        "name": "Trucking",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.019291,
                            "benchmarkReturn": -0.021359,
                            "valueAdd": 0.040650,
                            "fundWeight": 0.1252,
                            "benchmarkWeight": 0.0888,
                            "fundCTR": 0.000024,
                            "benchmarkCTR": -0.000019,
                            "relativeCTR": 0.000043,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      },
                      {
                        "id": "181",
                        "name": "Railroads",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": 0.017695,
                            "benchmarkReturn": 0.053875,
                            "valueAdd": -0.036179,
                            "fundWeight": 0.8312,
                            "benchmarkWeight": 0.2455,
                            "fundCTR": 0.000147,
                            "benchmarkCTR": 0.000132,
                            "relativeCTR": 0.000015,
                            "statusCode": 0,
                            "message": "OK"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "217",
                    "name": "Marine",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.095956,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 1.5637,
                        "fundCTR": null,
                        "benchmarkCTR": 0.001501,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "218",
                        "name": "Marine",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.095956,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 1.5637,
                            "fundCTR": null,
                            "benchmarkCTR": 0.001501,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "162",
                    "name": "Airlines",
                    "calculationType": "CTR",
                    "methodology": "geometricCompounding",
                    "benchmarks": [
                      {
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "id": "BSLN0003",
                        "name": "Global Equity Fund"
                      }
                    ],
                    "drillable": true,
                    "securities": false,
                    "periods": [
                      {
                        "type": "Custom",
                        "startDate": "20201201",
                        "endDate": "20201231",
                        "returnType": "Gross",
                        "fundReturn": null,
                        "benchmarkReturn": 0.031513,
                        "valueAdd": null,
                        "fundWeight": null,
                        "benchmarkWeight": 0.0288,
                        "fundCTR": null,
                        "benchmarkCTR": 0.000009,
                        "relativeCTR": null,
                        "statusCode": 2810,
                        "message": "No return data"
                      }
                    ],
                    "group": [
                      {
                        "id": "163",
                        "name": "Airlines",
                        "calculationType": "CTR",
                        "methodology": "geometricCompounding",
                        "benchmarks": [
                          {
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "id": "BSLN0003",
                            "name": "Global Equity Fund"
                          }
                        ],
                        "drillable": false,
                        "securities": false,
                        "periods": [
                          {
                            "type": "Custom",
                            "startDate": "20201201",
                            "endDate": "20201231",
                            "returnType": "Gross",
                            "fundReturn": null,
                            "benchmarkReturn": 0.031513,
                            "valueAdd": null,
                            "fundWeight": null,
                            "benchmarkWeight": 0.0288,
                            "fundCTR": null,
                            "benchmarkCTR": 0.000009,
                            "relativeCTR": null,
                            "statusCode": 2810,
                            "message": "No return data"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  sample = [
    {
      "id": "1",
      "parentId": null,
      "groupLevel": 1,
      "name": "TOTAL",
      "calculationType": "CTR",
      "methodology": "geometricCompounding",
      "benchmarks": [
        {
          "startDate": "20201201",
          "endDate": "20201231",
          "id": "BSLN0003",
          "name": "Global Equity Fund"
        }
      ],
      "drillable": true,
      "securities": false,
      "periods": [
        {
          "type": "Custom",
          "startDate": "20201201",
          "endDate": "20201231",
          "returnType": "Gross",
          "fundReturn": 0.035380,
          "benchmarkReturn": 0.056226,
          "valueAdd": -0.020846,
          "fundWeight": 100.0000,
          "benchmarkWeight": 100.0000,
          "fundCTR": 0.035380,
          "benchmarkCTR": 0.056226,
          "relativeCTR": -0.020846,
          "statusCode": 0,
          "message": "OK"
        }
      ],
    },
    {
      "id": "65",
      "parentId": "1",
      "groupLevel": 2,
      "name": "Financials",
      "calculationType": "CTR",
      "methodology": "geometricCompounding",
      "benchmarks": [
        {
          "startDate": "20201201",
          "endDate": "20201231",
          "id": "BSLN0003",
          "name": "Global Equity Fund"
        }
      ],
      "drillable": true,
      "securities": false,
      "periods": [
        {
          "type": "Custom",
          "startDate": "20201201",
          "endDate": "20201231",
          "returnType": "Gross",
          "fundReturn": 0.075157,
          "benchmarkReturn": 0.042225,
          "valueAdd": 0.032932,
          "fundWeight": 13.2079,
          "benchmarkWeight": 9.5171,
          "fundCTR": 0.009927,
          "benchmarkCTR": 0.004019,
          "relativeCTR": 0.005908,
          "statusCode": 0,
          "message": "OK"
        }
      ]
    },
    {
      "id": "69",
      "parentId": "65",
      "groupLevel": 3,
      "name": "Diversified Financials",
      "calculationType": "CTR",
      "methodology": "geometricCompounding",
      "benchmarks": [
        {
          "startDate": "20201201",
          "endDate": "20201231",
          "id": "BSLN0003",
          "name": "Global Equity Fund"
        }
      ],
      "drillable": true,
      "securities": false,
      "periods": [
        {
          "type": "Custom",
          "startDate": "20201201",
          "endDate": "20201231",
          "returnType": "Gross",
          "fundReturn": 0.070957,
          "benchmarkReturn": 0.045254,
          "valueAdd": 0.025703,
          "fundWeight": 4.2183,
          "benchmarkWeight": 4.1687,
          "fundCTR": 0.002993,
          "benchmarkCTR": 0.001887,
          "relativeCTR": 0.001107,
          "statusCode": 0,
          "message": "OK"
        }
      ]
    },
    {
      "id": "70",
      "parentId": "69",
      "groupLevel": 4,
      "name": "Capital Markets",
      "calculationType": "CTR",
      "methodology": "geometricCompounding",
      "benchmarks": [
        {
          "startDate": "20201201",
          "endDate": "20201231",
          "id": "BSLN0003",
          "name": "Global Equity Fund"
        }
      ],
      "drillable": true,
      "securities": false,
      "periods": [
        {
          "type": "Custom",
          "startDate": "20201201",
          "endDate": "20201231",
          "returnType": "Gross",
          "fundReturn": 0.073442,
          "benchmarkReturn": 0.059664,
          "valueAdd": 0.013778,
          "fundWeight": 3.6945,
          "benchmarkWeight": 2.8145,
          "fundCTR": 0.002713,
          "benchmarkCTR": 0.001679,
          "relativeCTR": 0.001034,
          "statusCode": 0,
          "message": "OK"
        }
      ]
    }
  ]

  constructor() { }

  transformNestedData(data: Object | any): Object {
    let newData = { asOfDate: data.asOfDate, performanceData: this.fromNestedToOneLevel(data.performanceData) };
    return newData
  }

  fromNestedToOneLevel(arrOfObj: Array<any>): Array<any> {
    let oneLevelArr: Array<any> = [];

    for (let obj of arrOfObj) {
      let parentID = obj.parentId ? obj.parentId : null;
      let groupLevel = obj.grpLevel ? obj.grpLevel : 1;

      if (obj.group) {
        for (let item of obj.group) {
          item.parentId = obj.id;
          item.grpLevel = groupLevel + 1;
        }
      };

      let oneLevel = [
        {
          id: obj.id,
          parentId: parentID,
          grpLevel: groupLevel,
          name: obj.name,
          calculationType: obj.calculationType,
          methodology: obj.methodology,
          benchmarks: obj.benchmarks,
          drillable: obj.drillable,
          securities: obj.securities,
          periods: obj.periods
        },
        ...(obj.group ? this.fromNestedToOneLevel(obj.group) : [])
      ]
      oneLevelArr.push(...oneLevel);
    }
    return oneLevelArr
  }

}