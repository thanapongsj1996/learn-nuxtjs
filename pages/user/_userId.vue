<template>
  <b-container>
    <h1>User info Page</h1>
    <h2>{{ getUsernameByID(userID) }}</h2>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            userID: this.$route.params.userId,
            users: [
                {
                    id: 123,
                    name: 'boy',
                },
                {
                    id: 456,
                    name: 'pong',
                },
                {
                    id: 789,
                    name: 'bank',
                },
            ],
        }
    },
    methods: {
        getUsernameByID(id) {
            const userID = parseInt(id)
            // let name = 'not found'
            // for (let i = 0; i < this.users.length; i++) {
            //     if (userID === this.users[i].id) {
            //         name = this.users[i].name
            //     }
            // }
            // return name

            const user = this.users.find(u => u.id === userID)
            return user ? user.name : 'not found'
        }
    }
}
</script>
