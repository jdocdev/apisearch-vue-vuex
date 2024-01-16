<template>
    <div class="card__entrie card h-100 bg-white shadow" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ entrie.API }}</h5>
            <p class="card-subtitle mb-2 text-truncate">{{ entrie.Description }}</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Auth</th>
                        <th scope="col">Cors</th>
                        <th scope="col">HTTPS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ entrie.Auth ? entrie.Auth : 'no' }}</td>
                        <td>{{ entrie.Cors ? entrie.Cors : 'no' }}</td>
                        <td>{{ entrie.HTTPS ? entrie.HTTPS : 'no' }}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p><span class="fw-bolder">Category:</span> {{ entrie.Category }}</p>
                <a :href="entrie.Link" class="fw-semibold">Api Link</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['entrie'],
}
</script>

<style>
p,
a,
button,
input,
textarea,
select,
time,
option {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    font-size: 1rem;
}

p,
table th,
table td {
    color: #1D2B53;
}

a {
    color: #7E2553;
}

a:hover {
    color: #3f132a;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Work Sans", sans-serif;
    color: #7E2553;
}
</style>