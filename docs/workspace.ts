import { C4NodeType, type C4System } from "@c4mjs/c4-react";

export const personalBankingCustomer: C4System = {
	id: crypto.randomUUID(),
	name: "Personal banking customer",
	description: "A customer of the bank, with personal bank accounts.",
	type: C4NodeType.System,
};

export const internetBankingSystem: C4System = {
	id: crypto.randomUUID(),
	name: "Internet Banking System",
	description:
		"Allows customers to view information about their bank accounts, and make payments.",
	type: C4NodeType.System,
};

export const mainframe: C4System = {
	id: crypto.randomUUID(),
	name: "Mainframe",
	description:
		"Stores all of the core banking information about customers, accounts, transactions, etc.",
	type: C4NodeType.System,
	external: true,
};

export const emailSystem: C4System = {
	id: crypto.randomUUID(),
	name: "Email System",
	description: "The internal Microsoft Exchange e-mail system.",
	type: C4NodeType.System,
};
