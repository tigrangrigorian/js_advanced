<template>
    <div id="app" class="container">
        <h3>Form</h3>
        <form class="pt-3" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email"
                       class="form-control"
                       :class="{'is-invalid': $v.email.$error}"
                       id="email"
                       @blur="$v.email.$touch()"
                       v-model="email"
                >
                <div class="invalid-feedback" v-if="!$v.email.email">Email is invalid!!!</div>
                <div class="invalid-feedback" v-if="!$v.email.required">Email is required!!!</div>
                <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This is already exist!!!</div>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password"
                       class="form-control"
                       :class="{'is-invalid': $v.password.$error}"
                       id="password"
                       @blur="$v.password.$touch()"
                       v-model="password"
                >
                <div class="invalid-feedback" v-if="!$v.password.required">Password is required!!!</div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Min length of password is {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPass">Confirm Password:</label>
                <input type="password"
                       class="form-control"
                       :class="{'is-invalid': $v.confirmPass.$error}"
                       id="confirmPass"
                       @blur="$v.confirmPass.$touch()"
                       v-model="confirmPass"
                >
                <div class="invalid-feedback" v-if="!$v.confirmPass.required">Confirm password is required!!!</div>
                <div class="invalid-feedback" v-if="!$v.confirmPass.sameAs">
                    Passwords should match!!!
                </div>
            </div>
            <button
                    class="btn btn-success"
                    type="submit"
                    :disabled="$v.$invalid"
            >Submit</button>
        </form>

    </div>
</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

    export default {
        name: 'App',
        data() {
            return {
                email: '',
                password: '',
                confirmPass: ''
            }
        },
        methods: {
          onSubmit() {
              console.log(this.email);
              console.log(this.password);
          }
        },
        validations: {
            email: {
                required,
                email,
                uniqEmail: (newEmail) => {
                    // return newEmail !== 'test@mail.ru'
                    if (newEmail === '') {
                        return true
                    }
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const value = newEmail !== 'test@mail.ru';
                            resolve(value)
                        }, 2000)
                    })
                }
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPass: {
                required,
                sameAs: sameAs('password'),
                // sameAs: sameAs((vue) => {
                //     return vue.password;
                // })
            }
        }
    }
</script>
<style>
    #app {
        margin-top: 10px;
    }

    h3 {
        text-align: center;
    }


</style>
