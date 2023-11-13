import { defineStore } from 'pinia'

import users from '../data/data'

import type { User, UserInput } from '../types/user'

let userCount = users.length

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    users: users as User[],
    currentPage: 1 as number,
    itemsPerPage: 20 as number,
    searchTerm: '' as string
  }),
  actions: {
    addNewUser(userData: UserInput) {
      userCount += 1
      const newUser = { ...userData, id: userCount }
      this.users.push(newUser as User)
    },
    deleteUser(userToRemove: User) {
      const index = this.users.findIndex((user: User) => user === userToRemove)
      if (index !== -1) {
        this.users.splice(index, 1)
      }
    },
    editUser(userToUpdate: User) {
      const index = this.users.findIndex((user: User) => user.id === userToUpdate.id)
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...userToUpdate }
      }
    },
    setCurrentPage(currentPage: number) {
      this.currentPage = currentPage
    },

    setItemsPerPage(itemsPerPage: number) {
      this.itemsPerPage = itemsPerPage
    }
  },
  getters: {
    totalItems(): number {
      return this.users.length
    },

    getUserById: (state) => {
      return (userId: number) => state.users.find((user) => user.id === userId)
    },

    computeUsers(): User[] {
      return this.users
        .filter((user: User) => {
          return (
            user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.surname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
          )
        })
        .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
    }
  }
})
