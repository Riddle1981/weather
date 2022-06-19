import { createStore } from 'ice';
import list from '@/models/list';
import card from '@/models/card';


const store = createStore({ list, card });

export default store;