//import add from './index'
let axios= require('axios')
jest.mock('axios')
describe('Test', function () {
    
    
    let {add} = require('./index')
    test('Add', function () {
        let addResult=add(2,3)
        expect(addResult).toEqual(5)
    })
    test('Testing api,using mocking',async ()=>{
        let mockRes={
            data:[{
                name:'Ashwin'
            }]
        }
        axios.get.mockResolvedValue(mockRes)
        let {api1}= require('./index.js')
        let result=await api1()
        console.log('Result'+result);
        expect(result).toEqual('Ashwin')
    })
    // it('spy',async ()=>{
    //     let testFunction=require('./index')
    //     const data=jest.spyOn(testFunction,'getIdWithName').mockResolvedValue('22 Ashwin')
    //     const result=await testFunction.getFullName('Ashwin')
    //     expect(result).toBe('Hello 33 Ashwin')
    //     expect(data).toBeCalled()
    // })
    it('Mocking functions',async ()=>{
        let {getFullName,getIdWithName}=require('./index')
        let mock= jest.fn().mockReturnValue('33 Ashwin')
        console.log(mock );
        getIdWithName=mock
        let result=await getFullName('Ashwin')
        expect(result).toEqual('Hello 33 Ashwin')
        expect(mock).toBeCalled()

        //console.log(result);
        //expect(result).toEqual('Hello 33 Ashwin')

        
        
        

    })
});