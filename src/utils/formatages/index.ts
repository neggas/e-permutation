
export const formatDemandeId = ( id:string):string => {
    return `P-${id.toString().substring(18)}`;
}