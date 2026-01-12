import { useEffect, useState } from 'react'

function ProfileContainer() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token')

      const response = await fetch('http://localhost:3333/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      setUser(data)
    }

    fetchProfile()
  }, [])

  if (!user) return <p>Loading...</p>

  return <h2>Welcome {user.email}</h2>
}

export default ProfileContainer
