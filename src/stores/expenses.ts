 import {defineStore} from "pinia"
import {supabase} from '@/lib/supabase'
import {ref} from 'vue'

type Expense ={
    id_Expense?: number
    date: string
    cost: number
    libelle: string
    id_categorie: number
    id_user:number
}


export const useExpenseStore = defineStore("Expense", () => {
    const expenses = ref<Expense[]>([]);
   
    async function initialise() {
      const { data, error } = await supabase
        .from("expenses")
        .select();
      if (data) {
        expenses.value = data;
        console.log(data);
        
      }
    }
    async function addExpense(expense: Expense){
        const {data,error} = await supabase.from("expenses").insert(expense).select('*');
        if(data){
          expenses.value.push(data[0]);
        }
      }
    
      return { expenses, initialise,addExpense };
      
    }); 