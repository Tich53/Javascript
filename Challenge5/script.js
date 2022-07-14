let amountInvoice = prompt ("Saisissez le montant de la facture");
amountInvoice = parseFloat(amountInvoice);

const tips = amountInvoice >= 50 && amountInvoice <= 300 ? 0.15 : 0.20;
const tipsAmount = amountInvoice * tips;
const totalAmount = amountInvoice + tipsAmount;
console.log (`La note était de ${amountInvoice}, le pourboire de ${tipsAmount} et la valeur totale était de ${totalAmount}`);