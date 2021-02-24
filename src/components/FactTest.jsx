import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'

const FactTest = () => {
  const [facts, setFacts] = useState('')

  useEffect(() => {
    const getFacts = async () => {
      const response = await axios.get(baseURL, config)
      setFacts(response.data.records)
    }
    getFacts()
  }, [])

  return (
    <>
      {facts && (
        <div>
          <h3>
            "{facts[Math.floor(Math.random() * facts.length)].fields.fact}"
          </h3>
        </div>
      )}
    </>
  )
}
export default FactTest
