var metrics = {};

metrics.Sensitivity = {
    name: "Sensitivity",
    shortName: "",
    description: "",
    derivation: "",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TP / (TP + FN);
    }
}

metrics.Specificity = {
    name: "Specificity",
    shortName: "",
    description: "",
    derivation: "",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TN / (FP + TN);
    }
}
