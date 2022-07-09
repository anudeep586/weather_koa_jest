import { data } from '../data'
import app  from '../server'
import {addWeatherDetailsService,getWDByCityService} from '../weatherService'


describe('Get api', () => {
    it('should return all books', async () => {
        const data1=await getWDByCityService('New Delhi')
        expect(data1).toEqual(data)
    })
})