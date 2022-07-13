import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {ReducersType} from '../redux/store';


export const useTypedSelector:TypedUseSelectorHook<ReducersType> = useSelector