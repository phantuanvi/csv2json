const fs = require('fs')
const csv = require('csvtojson')

const convert = () => {

    const csvFilePath = 'customer-data.csv'
    let buff = []
    csv()
        .fromFile(csvFilePath)
        .on('json', (jsonObj) => {
            buff.push(jsonObj)
        })
        .on('done', (error) => {
            if(error) throw error
    
            fs.writeFile('customer-data.json', JSON.stringify(buff), 'utf-8', (error) => {
                if(error) throw error 
            });
            console.log('done');
        })
}
convert()
