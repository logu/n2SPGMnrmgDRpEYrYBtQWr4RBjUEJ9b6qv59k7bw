import { expect } from 'chai'
import combinations from '../src/api/v1/helpers/combinations'

describe('combination helper', function() {
    it('should get the list of combination', () => {
        const tests = [
            {
                input : {
                    "x": 1,
                    "l": {
                        "x": 2,
                        "l": {
                            "x": 4,
                            "l": null,
                            "r": null
                        },
                        "r": {
                            "x": 5,
                            "l": {
                                "x": 7,
                                "l": null,
                                "r": null
                            },
                            "r": {
                                "x": 8,
                                "l": null,
                                "r": null
                            },
                        }
                    },
                    "r": {
                        "x": 3,
                        "l": null,
                        "r": {
                            "x": 6,
                            "l": {
                                "x": 9,
                                "l": null,
                                "r": null
                            },
                            "r": null
                        }
                    }
                },
                output : [
                    '1.2.4',
                    '1.2.5.7',
                    '1.2.5.8',
                    '1.3.6.9'
                ]
            },
            {
                input: null,
                output: []
            },
            {
                input: {"x": 2},
                output: ["2"]
            }
        ]

        tests.forEach(test=>{
            expect(combinations.findPaths(test.input)).to.deep.equal(test.output)
        })

    })
});