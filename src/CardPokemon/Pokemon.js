import React, { Component } from 'react'



export default class pokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '../../assets/images/img/001.png'
        }
    }
    renderCard = () => {
        const { pokemondata, pokemonDetail } = this.props
        return pokemondata.map((pokemon, index) => {
            let img, bg
            if (pokemon.id < 10) {
                img = '00' + pokemon.id
            } else {
                if (pokemon.id < 100) {
                    img = '0' + pokemon.id
                } else {
                    img = pokemon.id
                }

            }
            switch (pokemon.type[0]) {
                case 'Normal': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74i220-46efb57c-f214-4bf0-bb43-52a4c76d765a.png/v1/fill/w_444,h_250,q_70,strp/colorless_pokemon_energy_wallpaper_by_elbarnzo_d74i220-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRpMjIwLTQ2ZWZiNTdjLWYyMTQtNGJmMC1iYjQzLTUyYTRjNzZkNzY1YS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aeJA2dIg_vxBjo017xcLmBpOm8SGPacNXjUiXf-9euU'
                } break;
                case 'Fire': {
                    bg = 'https://cutewallpaper.org/21/pokemon-fire-wallpaper/Fire-Pokemon-Wallpapers-Wallpapers-Cave-Desktop-Background.png'
                } break;
                case 'Grass': {
                    bg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAYFBMVEWBwSRnmRyEwyRonBtmlxxllhyBwCOBwyN6tSNllx5+vyNnmhuDxCJnlxxmlR2DwCN0rh9toxyAvCVxqR19uCRqoR5ypyJ1rSF/uyd3siJ7uh9zpyB9tyZqox92tR9soB9qHNPzAAAExElEQVR4nO3d25LjJhQFUO4IgZAAy7o4I///Xwawu6cnk6SaJymVvR76Uu0HahccDpLsJhS+jZw9gP8ShNUAYTVAWA0QVgOE1QBhNUBYDRBWA4TVAGE1QFgNEFYDhNUAYTVAWA0QVgOE1YBw+DbC4NsIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXIt2ul+3KdvWPv9y9niubIzLbKWvpJ2XOJ49osvSaxik5GHZshS4NENYMbn+DuuDN3aKeSmWd2A5x+JijQ893oz1G7dRzzemNVEZ0UxthyMb93RzZ4/tatgkRHpXKDUyfUtWmD5nloSYMLd+wR5edB8ziLHjSQdB6TMXLNcJ/0BaX+jkbaylfBzz+qPy9Z5k8cj56WiHhDL/iW2Cxte8GlmXy1QWqKVU3srcilRumFsfeipuWuU8lI6zFDkmMS+iRMYZGZW+CdGfPcarcEGm17zKZd7YugL/4OWrFalMKZdMwJb40vm57oNM/SizqhSraRtqZpbWUsZm3508yIsY30mwyHNWwpiy+jgVpsYWam3/yPP/Tq+S1zUWy8oLcb97czuksc95Frlw7eVvjkscfDJ3F1vOYVS2lnS5uDWx1DnW78fxFLROLb2JO6pWzoGLUpdYeDdXJjmdm62HNUOtYKJMKR0Fx8wiZBecsDx1ZOkY6tw6tH7kXdG+O9PSkTLCxX72SC/gkHettOLC8pDCUwh/uJBTE+L92UJW5VfpuzzOHun59CSnHNaW975nmKLrF86ioHNalhTqlii60q2Wl5091tPpJLdxdKGuOGGDctHtG3Gu3/eotrnskIyocZM4IJYzdMdG/fF5XgOP45iPgw9LjRCGhye1vB4ZPcLKYYmOqfhRoHJD6sj4sTO+yHHMYQmERfQitlHttaLXmp5Yz80vnx4nbmwcN7EgLDL5XOAPQ/lyu22B+khKsS+5lTar9A9iY7nA++nskV7ATeYefafCWp52F1PPHsbMaZqmNL9nVpf7sCBvZ4/0AiLlRKtXdZeJaMLSphyLxzZNyz2frWmOKTelNJ490gvQT5MPNI9XhRelTSBOLXyQ7xqWu9Jy2jZPlKxsKR1U79/VPOVkjnIk/KzvZmOlG1vOHucVjHkJ5gPNamo81jKW5M+k8iJ8aEXUQBUuaJX7OalsdKxezsrziPzxtXEQdmK6bJlpRFj52EfiYGP+pu6GDtbs3ZcVSEMsj9JEO5RXQLkf4edyX4LdAjWmm15hGSl4ivUWmJt9wqW/F0X48LpFr9Uk05I3QWHn1O1E10tZbBo45tWnWLv08pMy9GnyYZp9Psim6i3YEwd3Nazz9DW3GLf1LP3lbxP1HW5I/6TcQU1iuUfQoeyFn2tOaZYMPRwW4ReMrdTz8mTDWs7Qnzfr9Y17uuLDxf+CqeDlj5W5sZvSXus5c/GH9EEhqt+5jnv/XFbinC5PLe/L03veoWf4nSK9VtvspaR8DmHm1Es/b0r36Br+gVqnwI0Y6uX3aUVM/4oxptSeKYV/GgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBBDL6NcPg2QuHbEFYDhNUAYTVAWA0QVgOE1QBhNUBYDRBWA4TVAGE1QFgNEFYDhNUAYTVAWA0QVgOE1eBP1m1n895AohIAAAAASUVORK5CYII='
                } break;
                case 'Water': {
                    bg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d0LkGD6a81sSuSi9Et4nochkTBKx73GfZw&usqp=CAU'
                } break;
                case 'Electric': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d74n7g8-d9e08cee-3a8d-45c4-b2bc-127d4839ea1c.png/v1/fill/w_1024,h_576,q_80,strp/electric_pokemon_energy_wallpaper_by_elbarnzo_d74n7g8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzRuN2c4LWQ5ZTA4Y2VlLTNhOGQtNDVjNC1iMmJjLTEyN2Q0ODM5ZWExYy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XBz_pjUjkNv02DCfS1bO_eEQTRwg4wTaAJWjBsxgvEA'
                } break;
                case 'Ice': {
                    bg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEWO1+1yrL6Q2vBwqbt9vtKN1etzrsBwq7yIzuOAwtaDxtp3tMeK0eZ1scOL0uh7u85NNnh8AAADvklEQVR4nO3d626cMBCGYWzjM17u/247Y8Nmk26U+BdUfZ9KDYeoQp9sM8Oy6mLwa8vVF/AvIawJhDWBsCYQ1gTCmkBYEwhrAmFNIKwJhDWBsCYQ1gTCmkBYEwhrAmFNIKwJhDVhsfi1BQAAAAAAAAAAAAAAAAAAAAAAAHej3/rYtu2x8O2Pn9gtV+M6U/ODvL5nSzuCiuNnLcT1ni3GRVdz6t9U8ylX2Q2JuN7wko3Ji9XU9l2GlAS2yujar76w+7FJZl4ei7rdJaKxtchmeFx7abdjk4bSA/KmrMasxfhxQtb77dqLuxnNqh6LUzMmCGPacVIWfcbWi0d8ZuVbz0rSav4421y47MruxwbXdGEfO2vUrOJ67Ep+4RklbI7R28XnXPpu0rBGyVBy9lKpOleuvcT78JKFLcvjXLesLvBjq+p6VezqzLWXeBtSKTQZPKEYc4YV4xmWMSW4zZrI0BqiS1aWdfnzJiw93GSiBlYtVZwEsQW9CTavkTzDsr7pbTFsPdCrr/MObO3J2J5LzPYjLBlPPUHd3M+74//NOh00m0y4GHXSJTvCkpui7MYok3PT4dcIa9GbYB85xuUk5WeI+6JhLbuUW66l7EyURnHT30LSJUvSqtIaWrkjSqNTQ6h9Q589PGpvqukQVTmrq/HXGs92R0bXywnDCr98hHWwunppVnX7dDgQlshfwlrWEdYxrs7DhKU+TUMpF8w5DU1+ttJMw0NyRuOIe9IFvpcL/amDlhG6wKc96q8553/4h/4HXmPQ3tm1Ul0vF7SR7mWEq6W53lUn56izjtVIZp9OvDGajqK0jzKdlDIfbeaRlpJ6VAopu7Q++fLy0hse7Y6ctK2fQdLifGvfN9Jtsw+eww9W2ufN9Tn49hGNrGaPnVk46MMFKwVEev/wL1VXvKNwOAW3Wikcovn7sbKJUjzYysB6klVLP59oo2WWbloWqv5KiLTXTQ/QRX+wuzOP8WrWl4/C9JB+ApsZWB+kAj0L9N2Ndud8I0TfgmASfhKcGU8ZvLQ7UjA0KbGOlx0cD0m/8OE511rKMeY0XnWwq3P1ygu7pyojKI11arQ7ulnC+fYRXkm5JXEVXdNTzklf/tOoIq/+vWP97iSvupa0bamszcXo1quv6rasX4N70fLCsPqetY8ihagJTQYYb3b/jP8xAgAAAAAAAAAAAAAAAAAAAAAA4MYsfm0x+DXCmkBYEwhrAmFNIKwJhDWBsCYQ1gTCmkBYEwhrAmFNIKwJhDWBsCYQ1gTCmkBYEwhrwh+/hUp82nUlyAAAAABJRU5ErkJggg=='
                } break;
                case 'Fighting': {
                    bg = 'data:image/png;base64,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'
                } break;
                case 'Poison': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2b02-f19f2e42-b157-4986-a49a-e8bdaabf12f0.png/v1/fill/w_1192,h_670,q_70,strp/poison_type_pokemon_wallpaper_by_elbarnzo_dbi2b02-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmIwMi1mMTlmMmU0Mi1iMTU3LTQ5ODYtYTQ5YS1lOGJkYWFiZjEyZjAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1G4SNh8cSxMoGlBllqxOu0-wZzEpbmfSB1KgUo1R298'
                } break;
                case 'Ground': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2ame-7e0f56b2-2587-47db-8e2b-0429d1f40a80.png/v1/fill/w_1192,h_670,q_70,strp/ground_type_pokemon_wallpaper_by_elbarnzo_dbi2ame-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmFtZS03ZTBmNTZiMi0yNTg3LTQ3ZGItOGUyYi0wNDI5ZDFmNDBhODAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.p-YGmaWlanAgM3JYZB6Msy9dfZxGhsKgamTJBE9wVxM'
                } break;
                case 'Flying': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/daoas8t-ba1dbb24-2a99-4fa3-9223-91d74351713f.png/v1/fill/w_1192,h_670,q_70,strp/flying_type_pokemon_energy_by_elbarnzo_daoas8t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFvYXM4dC1iYTFkYmIyNC0yYTk5LTRmYTMtOTIyMy05MWQ3NDM1MTcxM2YucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ApR3UcRXI8T_cokWf1uWvhhWC3VnIAj0r_kJ_kpKO3o'
                } break;
                case 'Psychic': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d759r4f-8c6f09ca-6e05-4de6-8da8-758a40523c94.png/v1/fill/w_1024,h_576,q_80,strp/physic_pokemon_energy_wallpaper_by_elbarnzo_d759r4f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kNzU5cjRmLThjNmYwOWNhLTZlMDUtNGRlNi04ZGE4LTc1OGE0MDUyM2M5NC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qIQ_7BaTvnPAaM2radqKN6l6DL-Q9uPic7diPg_BFnE'
                } break;
                case 'Bug': {
                    bg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEUmdTkeXi4fXi8iaDMfYC8gYzElcjgjbDUmdDkiajQkbzYmdzoiaTQfYjAfYDAiazRsUeoVAAAEC0lEQVR4nO3d3XLjKBCGYaBBErSx7/9utxssJ6md2Q1HcirvUzWOf3Kg+gpajZAzIeLbwtUH8JMQ1gLCWkBYCwhrAWEtIKwFhLWAsBYQ1gLCWkBYCwhrAWEtIKwFhLWAsBYQ1oKQ8W0BAAAAAAAAAAAAAAAAAAAAAAAA+ME0hGMz8yn+TnWrJaYhl8eh5PU3qntOMaboD/Yvpt4YXn+mu3+nrzyaDSgbUq12iy23qw/rHWmwbOIj6Dn17MlRbTqWa4/rHWmziVdDkyLHfOewp1sQK14HU/Eryypv4YhSU5GSc5Eea+kWopWvjbQ+sXEVy0jEZ6PXdouojAmphxX97eLjeytbPEvTI72+vp3is7hbWtcd2tvRnPp8VtLnb7snme9alEzEk8Q0q3rZ5VNaqZbq7+qW0k5a05HiyELrbs3WR1pb0DJnosRIWJPEPqPwWWfDaEbVvXnXOT3VOjDSGmJqY2DdxjDanuNq/MkJlflRjfwFCmernOwtw6ax+Tqn+6jKXrH8lRTdvJ5ZoFcf6FsosepoSu2kV6svpWMpY5lYxZoub7PUfkmYhybaiDrL+rMhFfn0yrSwx371cb4D6wt0LHZevajNQOsgzqS6dffp8N+6+kivZ4u/bAX8HnRewspSYrrZ+tlG14gr6+bFzFaIVx/q9ay+F78eEw7xuehVvdnIuvtHVrnuW1b/1Cfr1Yd6PX3EsSzUQyy32XDJbXYMlpAtheYFrkxYr7C0irWkaZzytN3molBtDoYsox9lZIUxDf08ZyVebN1TZgt6k1mg4l0tpTSeEpZpozm3ZquonQObTzor8MUvK/vr0MX7sJCea+3f7fAY7MFTMbLXZGHFXH3DwlsuWyxa0zrH12+n3pQ2m4C3ZyOaPKFXn5X20TXUyMaFkyhjaXi8uvYR1plWUFvtaB5z8dfz9t1/HnlkU+vdar11WOeFwDGiNkrW07xYlX3NnL2udw+r+j6r9e9pnCGFpeGkNfqGRE5yzOFjHUTps+FKWnwrw+p/YxYOOnYmLCyV2UuVkkcjqrKPsOwhk9XkVauphxWKh6Sl5+orwiK+31OsyWcV/WIjJ4W2+7CSvumWsjeqLe72hr3dfGMfJ33to+pW7qN7sPZ03uOgHzuwGI74sUd/7NKLnHdm+c0OnYL1lfWgZ9vpy8PnjUdjfUhW/1Islfb1vkjVll97+PjEz3kp7+eg8munD9/qocH6Ew1jfdPFzn+t7TI2xYSbSv9qbBvOu5V984KO4b9o2B7S/f+LKLJzZ/f/Uv36EwAAAAAAAAAAAAAAAAAAAAAAAPihMr4tRHwbYS0grAWEtYCwFhDWAsJaQFgLCGsBYS0grAWEtYCwFhDWAsJaQFgLCGsBYS0grAX/AFO8TLIa+hDAAAAAAElFTkSuQmCC'
                } break;
                case 'Rock': {
                    bg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAMFBMVEVuZFpYUEhZUUlWTkdkW1JsYlhpYFZdVUxiWVBcU0tmXVRsY1leVk1wZVthWVBqYFdNGDFkAAACoElEQVR4nO3czXaDIBCGYQfwD7Xe/90WSEyCCSazieb4Pqu26YLzHRhHNFSCj1V7D+CXEJYCYSkQlgJhKRCWAmEpEJYCYSkQlgJhKRCWAmEpEJYCYSkQlgJhKRCWQmXwsQoAAAAAAAAAAAAAAAAAAAAAAAD4bcPQNPXeg/gFteuvX8EyrSOxLd7Yx6+s2d5X095jOigfA2pdc/ltTnPMzPuO6ajakI3L/lJ3YXaNOw3nyJqnqJLRiqF0rfhSKDFE0so0VvrCR4MhrUwdCnv505DW94ZyfKY4r5LNKM+m2546U1ik/ltjObpB1lm4v/z3N2meybhehIPYJv/Ly7bilESa/KamfzpwwgknUCR+HURIxsiqcQ+Bfm9EB9ZKt/zoYkSDxKNMVmXs4Z9O7WHSiPWXRRjTyjpRv91cnMV8u9JNbYgoLcIkpbPMr1rsPsM7lOlesnyMqV+yMvIXL5TLv4kMew3xQO4LbH0Ck51reyv0IuxsxWvf9V7mT9Zpmf5e6A2Xw+oe1mxfn/B1XX6EFS3LsHQc2nUh0mhFzeVq6J4X4ZJWWoiWTa1gsLEpqItZxXbiFunppT2HvpyVMe0UJh5NaTTKOLnseeGa9VPPtkPiP1hhoYGnZCUfbFaNbCxfubdTq6ZxuJE3+y+hYlHeF97azRs/J9ufn8soUpdfl2nYgc+YjR2YmceGK1Is4aGzoGCtGLEv11pXfgvixPowg5p14fKGF7ReCu2W9NkzHRdKGQ/uC8b0nmTnm8B36U1cHoCVdebx/tnQMWyb3Zi2a/rOc+sMAAAAAAAAAAAAAAAAAAAAAAAAnMXWGTDIVVtnwCBHWAqEpUBYCoSlQFgKhKVAWAqEpUBYCoSlQFgKhKVAWAqEpUBYCoSlQFgKhKXwD/0JOqpKt7yfAAAAAElFTkSuQmCC'
                } break;
                case 'Ghost': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dapamlc-b71a2404-059b-47ea-b47d-47304f7bec34.png/v1/fill/w_1024,h_576,q_80,strp/ghost_type_pokemon_wallpaper_by_elbarnzo_dapamlc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kYXBhbWxjLWI3MWEyNDA0LTA1OWItNDdlYS1iNDdkLTQ3MzA0ZjdiZWMzNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mJY9WQxzD7Ph1YnF_i0rH33LJlml66zTgs7M2mVip1A'
                } break;
                case 'Dragon': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dak4w59-4543ab66-519a-4fd1-9391-0cd0cd4b358f.png/v1/fill/w_1192,h_670,q_70,strp/dragon_type_pokemon_wallpaper_by_elbarnzo_dak4w59-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFrNHc1OS00NTQzYWI2Ni01MTlhLTRmZDEtOTM5MS0wY2QwY2Q0YjM1OGYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T0AarPj45HLFnGjxoWd8vzlbFY8WOzUOiVDJGTRgLAw'
                } break;
                case 'Dark': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dajx3sf-78dd905f-8cf4-4dab-b853-aa22f437b971.png/v1/fill/w_1192,h_670,q_70,strp/dark_type_pokemon_wallpaper_by_elbarnzo_dajx3sf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFqeDNzZi03OGRkOTA1Zi04Y2Y0LTRkYWItYjg1My1hYTIyZjQzN2I5NzEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DsWvdBQjvUtDbkTpjxXn1sXJNN6NTS6q3P7J3TwDOLw'
                } break;
                case 'Steel': {
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/dbi2bbj-684b5dc6-a546-435d-986b-7ea1c39a697c.png/v1/fill/w_1192,h_670,q_70,strp/steel_type_pokemon_wallpaper_by_elbarnzo_dbi2bbj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGJpMmJiai02ODRiNWRjNi1hNTQ2LTQzNWQtOTg2Yi03ZWExYzM5YTY5N2MucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QlN-J51ZuR4B1BDhLTOkm4fKoDTEulgeQ7OKV9gJxw4'
                } break;
                case 'Fairy':{
                    bg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/daoarj9-eeca0f14-698f-4ddb-9083-dadc70f35dc2.png/v1/fill/w_1192,h_670,q_70,strp/fairy_type_pokemon_wallpaper_by_elbarnzo_daoarj9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2QxZmEwZjgwLTMzYzEtNDUxNi04YmFhLTkwZmI2N2VkMjI2OVwvZGFvYXJqOS1lZWNhMGYxNC02OThmLTRkZGItOTA4My1kYWRjNzBmMzVkYzIucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Jw30FdRyCdz3sQcL3bjbbpXUsN3iZOUr6EFg-YUuTQk'
                }break;
                default: {
                    bg = ''
                }
            }
            return (
                <div className='col-6' key={index}>
                    <div className="card text-left mt-3 P-2" style={{ display: 'flex', flexFlow: 'row', backgroundImage: `url(${bg})`, cursor:'pointer'}} onClick={()=>pokemonDetail(pokemon)} data-toggle="modal" data-target="#modelId"> 
                        <div><img className="card-img-top" src={`../../assets/images/sprites/${img}MS.png`}/></div>
                        <img className="card-img-top" src={`../../assets/images/img/${img}.png`} style={{ maxWidth: 200 }} />
                        <div className="card-body">
                            <div className='heading'>
                                <h4 className="card-title">{pokemon.name.english}</h4>
                                <span>({pokemon.name.japanese})</span>
                            </div>
                            <div className='parameter'>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td className='fw-b'>Type:</td>
                                            <td>{(pokemon.type).join(' ')}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-b'><i className="fas fa-heart" style={{color:'#d60202'}}></i><br/>(HP)</td>
                                            <td className='fs-20'>{pokemon.base.HP}</td>
                                            <td className='fw-b'><i class="fas fa-meteor" style={{color:'#ffd400'}}></i><br/>(Attack)</td>
                                            <td className='fs-20'>{pokemon.base.Attack}</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-b'><i class="fab fa-phoenix-squadron" style={{color:'#e5ff54'}}></i><br/>(Sp.ATK)</td>
                                            <td className='fs-20'>{pokemon.base.SpAttack}</td>
                                            <td className='fw-b'><i class="fab fa-old-republic" style={{color:'#00c12a'}}></i><br/>(Sp.DEF)</td>
                                            <td className='fs-20'>{pokemon.base.SpDefense}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderCard()}
            </div>
        )
    }
}
