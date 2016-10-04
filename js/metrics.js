var metrics = {};

metrics.tpr = {
    name: "Sensitivity",
    shortName: "TPR",
    longName: "Sensitivity or True Positive Rate (TPR)",
    description: "",
    derivation: "TPR = TP / (TP + FN)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TP / (TP + FN);
    }
}

metrics.spc = {
    name: "Specificity",
    shortName: "SPC",
    longName: "Specificity (SPC) or True Negative Rate (TNR)",
    description: "",
    derivation: "SPC = TN / (FP + TN)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TN / (FP + TN);
    }
}

metrics.ppv = {
    name: "Precision",
    shortName: "PPV",
    longName: "Precision or Positive Predictive Value (PPV)",
    description: "",
    derivation: "PPV = TP / (TP + FP)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TP / (TP + FP);
    }
}

metrics.npv = {
    name: "Negative Predictive Value",
    shortName: "NPV",
    longName: "Negative Predictive Value (NPV)",
    description: "",
    derivation: "NPV = TN / (TN + FN)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = TN / (TN + FN);
    }
}

metrics.fpr = {
    name: "False Positive Rate",
    shortName: "FPR",
    longName: "Fall-out or False Positive Rate (FPR)",
    description: "",
    derivation: "FPR = FP / (FP + TN)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = FP / (FP + TN);
    }
}

metrics.fdr = {
    name: "False Discovery Rate",
    shortName: "FDR",
    longName: "False Discovery Rate (FDR)",
    description: "",
    derivation: "FDR = FP / (FP + TP)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = FP / (FP + TP);
    }
}

metrics.fnr = {
    name: "False Negative Rate",
    shortName: "FNR",
    longName: "Miss Rate or False Negative Rate (FNR)",
    description: "",
    derivation: "FNR = FN / (FN + TP)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = FN / (FN + TP);
    }
}

metrics.fnr = {
    name: "False Negative Rate",
    shortName: "FNR",
    longName: "Miss Rate or False Negative Rate (FNR)",
    description: "",
    derivation: "FNR = FN / (FN + TP)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = FN / (FN + TP);
    }
}

metrics.acc = {
    name: "Accuracy",
    shortName: "ACC",
    longName: "Accuracy (ACC)",
    description: "",
    derivation: "ACC = (TP + TN) / (P + N)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = (TP + TN) / (TP + FP + TN + FN);
    }
}

metrics.f1 = {
    name: "F1 Score",
    shortName: "F1",
    longName: "F1 Score (F1)",
    description: "",
    derivation: "F1 = 2TP / (2TP + FP + FN)",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = 2*TP / (2*TP + FP + FN);
    }
}

metrics.mcc = {
    name: "Matthews Correlation Coefficient",
    shortName: "MCC",
    longName: "Matthews Correlation Coefficient (MCC)",
    description: "",
    derivation: "TP*TN - FP*FN / sqrt((TP+FP)*(TP+FN)*(TN+FP)*(TN+FN))",
    value: undefined,
    update: function (TP, FP, FN, TN) {
        this.value = (TP*TN - FP*FN) / Math.sqrt((TP+FP)*(TP+FN)*(TN+FP)*(TN+FN));
    }
}

//ref: https://en.wikipedia.org/wiki/Confusion_matrix