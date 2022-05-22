import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {emailValidation,phoneValidation} from '../InputTest';

export const addWorkFlow=async(val)=>{
    try {
      const workFlowData=await API.graphql({query:mutations.createWorkflow,variables:{input:val}});
      console.log(workFlowData);
    } catch (error) {
      console.log("error is ",error);
    }
  }
  export const updateWorkFlow=async(val)=>{
  try {
      const updatedData=await API.graphql({query:mutations.updateWorkflow,variables:{input:val}});
      console.log(updatedData);
    } catch (error) {
      console.log("Error is ",error);
    }
  }
  export const deleteWorkFlow=async(val)=>{
    try {
      const deletedItem=await API.graphql({query:mutations.deleteWorkflow,variables:{id: val.id}})
      console.log(deletedItem);
    } catch (error) {
      console.log("Error is ",error);
    }
  }

  export const listWorkFlow=async(val)=>{
    try {
      const list=await API.graphql({query:queries.listWorkflows});
      console.log(list);
    } catch (error) {
      console.log("error is ",error);
    }
  }