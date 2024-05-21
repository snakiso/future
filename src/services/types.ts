export type Response = {
	THESAURUS: ResponseTHESAURUS;
	STEP: number;
	STATUS: string;
	MESSAGE: string;
	COUNT: number
}
export type ResponseTHESAURUSTYPE = {
	personal: number;
	professional: number;
}
export type ResponseTHESAURUS = {
	TYPE: ResponseTHESAURUSTYPE;
}