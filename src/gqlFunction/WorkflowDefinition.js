import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';
import {validateEmail,validatePhone} from '../InputTest';

export const addWorkFlowDefinition=async(val)=>{
    try {
      const workFlowDefinitionData=await API.graphql({query:mutations.createWorkflowDefinition,variables:{input:val}});
      console.log(workFlowDefinitionData);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
export const updatedefiniton=async(val)=>{
    try {
      const updateWorkFlowDefinition=await API.graphql({query:mutations.updateWorkflowDefinition,variables:{input:val}});
      console.log(updateWorkFlowDefinition);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
  export const deleteDefinition=async(val)=>{
    try {
      const deleteWorkFlowDefinition=await API.graphql({query:mutations.deleteWorkflowDefinition,variables:{id:val.id}});
      console.log(deleteWorkFlowDefinition);
    } catch (error) {
      console.log("Error is ",error);
      throw new Error(error)

    }
  }
  export const listDefintions=async(val)=>{
    try {
      const listDefintion=await API.graphql({query:queries.listWorkflowDefinitions});
      console.log(listDefintion);
    } catch (error) {
      console.log("error is ",error);
      throw new Error(error)

    }
  }