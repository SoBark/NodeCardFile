import {makeAutoObservable} from "mobx";

export default class CaseStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Убийство', article: '105'},
            {id: 2, name: 'Угон', article: '166'},
            {id: 3, name: 'Разбой', article: '162'}
        ]

        this._cases = [
            {id: 1, status:'Расследуется', description: 'Убийство старухи проценщицы', userId: 1, typeId: 1},
            {id: 2, status:'Расследуется', description: 'Grand Theft Auto', userId: 2, typeId: 2},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }



    setTypes(types){
        this._types = types
    }
    setCases(cases){
        this._cases = cases
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get Types() {
        return this._types
    }

    get Cases(){
        return this._cases
    }

    get SelectedType(){
        return this._selectedType
    }
}